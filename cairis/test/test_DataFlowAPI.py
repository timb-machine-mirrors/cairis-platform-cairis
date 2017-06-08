#  Licensed to the Apache Software Foundation (ASF) under one
#  or more contributor license agreements.  See the NOTICE file
#  distributed with this work for additional information
#  regarding copyright ownership.  The ASF licenses this file
#  to you under the Apache License, Version 2.0 (the
#  "License"); you may not use this file except in compliance
#  with the License.  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing,
#  software distributed under the License is distributed on an
#  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
#  specific language governing permissions and limitations
#  under the License.


import logging
from urllib import quote
import jsonpickle
from cairis.core.DataFlow import DataFlow
from cairis.test.CairisDaemonTestCase import CairisDaemonTestCase
import os
from cairis.mio.ModelImport import importModelFile
from cairis.tools.ModelDefinitions import DataFlowModel

__author__ = 'Shamal Faily'


class DataFlowAPITests(CairisDaemonTestCase):

  @classmethod
  def setUpClass(cls):
    importModelFile(os.environ['CAIRIS_SRC'] + '/test/DFDTestModel.xml',1,'test')

  
  def setUp(self):
    # region Class fields
    self.logger = logging.getLogger(__name__)

    self.existing_dataflow_name = 'authenticate'
    self.existing_environment_name = 'Psychosis'
    self.existing_from_name = 'Authorised Researcher'
    self.existing_from_type = 'entity'
    self.existing_to_name = 'Authenticate Researcher'
    self.existing_to_type = 'process'
    self.existing_assets = ['Credentials']

    dataflow_class = DataFlow.__module__+'.'+DataFlow.__name__
    # endregion

  def test_get_all(self):
    method = 'test_get_all'
    rv = self.app.get('/api/dataflows?session_id=test')
    dataflows = jsonpickle.decode(rv.data)
    self.assertIsNotNone(dataflows, 'No results after deserialization')
    self.assertIsInstance(dataflows, dict, 'The result is not a dictionary as expected')
    self.assertGreater(len(dataflows), 0, 'No dataflows in the dictionary')
    self.logger.info('[%s] DataFlows found: %d', method, len(dataflows))
    dataflow = dataflows.values()[0]
    self.assertEqual(dataflow['theName'],self.existing_dataflow_name)
    self.assertEqual(dataflow['theEnvironmentName'],self.existing_environment_name)
    self.assertEqual(dataflow['theFromName'],self.existing_from_name)
    self.assertEqual(dataflow['theFromType'],self.existing_from_type)
    self.assertEqual(dataflow['theToName'],self.existing_to_name)
    self.assertEqual(dataflow['theToType'],self.existing_to_type)

  def test_get_by_name(self):
    method = 'test_get_by_name'
    url = '/api/dataflows/name/' + quote(self.existing_dataflow_name) + '/environment/' + quote(self.existing_environment_name) + '?session_id=test'
    rv = self.app.get(url)
    self.assertIsNotNone(rv.data, 'No response')
    self.logger.debug('[%s] Response data: %s', method, rv.data)
    dataflow = jsonpickle.decode(rv.data)
    self.assertIsNotNone(dataflow, 'No results after deserialization')
    self.assertEqual(dataflow['theName'],self.existing_dataflow_name)
    self.assertEqual(dataflow['theEnvironmentName'],self.existing_environment_name)
    self.assertEqual(dataflow['theFromName'],self.existing_from_name)
    self.assertEqual(dataflow['theFromType'],self.existing_from_type)
    self.assertEqual(dataflow['theToName'],self.existing_to_name)
    self.assertEqual(dataflow['theToType'],self.existing_to_type)

  def test_post(self):
    method = 'test_post'
    url = '/api/dataflows'
    self.logger.info('[%s] URL: %s', method, url)
    new_dataflow_body = self.prepare_json()

    rv = self.app.post(url, content_type='application/json', data=new_dataflow_body)
    self.logger.debug('[%s] Response data: %s', method, rv.data)
    json_resp = jsonpickle.decode(rv.data)
    self.assertIsNotNone(json_resp, 'No results after deserialization')
    self.assertEqual(json_resp['message'],'DataFlow successfully added')
    rv = self.app.delete('/api/dataflows/name/acknowledge/environment/Psychosis?session_id=test')

  def test_put(self):
    method = 'test_put'
    url = '/api/dataflows'
    self.logger.info('[%s] URL: %s', method, url)
    new_dataflow_body = self.prepare_json()

    rv = self.app.post(url, content_type='application/json', data=new_dataflow_body)
    self.logger.debug('[%s] Response data: %s', method, rv.data)
    json_resp = jsonpickle.decode(rv.data)
    self.assertIsNotNone(json_resp, 'No results after deserialization')

    dataflow_to_update = self.prepare_new_dataflow()
    dataflow_to_update.theName = 'Edited test dataflow'
    upd_env_body = self.prepare_json(dataflow=dataflow_to_update)
    rv = self.app.put('/api/dataflows/name/acknowledge/environment/Psychosis?session_id=test', data=upd_env_body, content_type='application/json')
    self.assertIsNotNone(rv.data, 'No response')
    json_resp = jsonpickle.decode(rv.data)
    self.assertIsNotNone(json_resp)
    self.assertEqual(json_resp['message'],'DataFlow successfully updated')

    rv = self.app.get('/api/dataflows/name/Edited%20test%20dataflow/environment/Psychosis?session_id=test')
    upd_dataflow = jsonpickle.decode(rv.data)
    self.assertIsNotNone(upd_dataflow, 'Unable to decode JSON data')

    self.assertEqual(upd_dataflow['theName'],dataflow_to_update.name())
    self.assertEqual(upd_dataflow['theEnvironmentName'],dataflow_to_update.environment())
    self.assertEqual(upd_dataflow['theFromName'],dataflow_to_update.fromName())
    self.assertEqual(upd_dataflow['theFromType'],dataflow_to_update.fromType())
    self.assertEqual(upd_dataflow['theToName'],dataflow_to_update.toName())
    self.assertEqual(upd_dataflow['theToType'],dataflow_to_update.toType())

    rv = self.app.delete('/api/dataflows/name/Edited%20test%20dataflow/environment/Psychosis?session_id=test')
    self.assertIsNotNone(rv.data, 'No response')
    json_resp = jsonpickle.decode(rv.data)
    self.assertIsNotNone(json_resp)
    self.assertEqual(json_resp['message'],'DataFlow successfully deleted')

  def test_dataflow_diagram(self):
    url = '/api/dataflows/diagram/environment/Psychosis/filter/None?session_id=test'
    method = 'test_dataflow_datagram'
    self.logger.info('[%s] URL: %s', method, url)
    rv = self.app.get(url, content_type='application/json')
    self.logger.debug('[%s] Response data: %s', method, rv.data)
    self.assertIsNotNone(rv.data, 'No results after deserialization')
    self.assertEquals(rv.data.find('svg'),1)


  def prepare_new_dataflow(self):
    new_dataflow = DataFlow(
      dfName='acknowledge',
      envName='Psychosis',
      fromName='Authenticate Researcher',
      fromType='process',
      toName='Authorised Researcher',
      toType='entity',
      dfAssets=['Session']
    )
    return new_dataflow

  def prepare_dict(self, dataflow=None):
    if dataflow is None:
      dataflow = self.prepare_new_dataflow()
    else:
      assert isinstance(dataflow, DataFlow)

    return {
      'session_id': 'test',
      'object': dataflow,
    }

  def prepare_json(self, data_dict=None, dataflow=None):
    if data_dict is None:
      data_dict = self.prepare_dict(dataflow=dataflow)
    else:
      assert isinstance(data_dict, dict)
    new_dataflow_body = jsonpickle.encode(data_dict, unpicklable=False)
    self.logger.info('JSON data: %s', new_dataflow_body)
    return new_dataflow_body