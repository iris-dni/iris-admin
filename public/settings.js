(function (global) {
  global.iris = global.iris || {};
  global.iris.settings = global.iris.settings || {};
  global.iris.settings.platform = {
    name: 'Iris'
  };
  global.iris.settings.swagger = {
    specUrl: 'https://api.petitiodev.lovelysystems.com/swagger.json'
  };
  global.iris.settings.ssoProviders = [
    {
      loginUrl: 'https://aaz.azdev.lovelysystems.com/anmelden',
      name: 'AZ Dev'
    }
  ];
}(window));
