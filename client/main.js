console.log('[CLIENT] main.* wildcard - Main.js  ...');

// Template.registerHelper("Schemas", Schemas);

Template.body.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});
