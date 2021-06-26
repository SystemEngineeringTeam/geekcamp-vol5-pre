/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './tasks'

export default (client) => mockServer([
  {
    path: '/tasks',
    methods: mock0
  }
], client, '')
