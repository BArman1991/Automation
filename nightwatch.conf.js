module.exports = {
  'src_folder':['tests'],
  'page_object_path':['tests'],

  'webdriver':{
    'start_process':true,
    'server_path':'node_module/.bin/chromedriver',
    'port':'9515'
  },

  'test_settings':{
    'default':{
      'desiredCapabilities':{
        'browserName':'chrome'
      }
    }
  }
}