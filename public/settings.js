(function (global) {
  global.iris = global.iris || {};
  global.iris.settings = global.iris.settings || {};
  global.iris.settings.swagger = {
    specUrl: 'http://api-iris-dev.lovelysystems.com/swagger.json'
  };
  global.iris.settings.ssoProviders = [
    {
      loginUrl: 'http://aaz-azdev.lovelysystems.com/anmelden',
      name: 'AZ Dev'
    }
  ];
}(window));
