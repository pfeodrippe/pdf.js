var SyncPdfJs = {
  name: 'syncpdfjs',
  builder: function(privateClient) {
    privateClient.declareType('pdfJsBookProperties', {
      type: 'object',
      properties: {
        obj: { type: 'string' }
      },
      required: ['obj']
    });

    return {
      exports: {

        init: function() {
          privateClient.cache('');
        },

        on: privateClient.on,

        update: function(obj) {
          var date = new Date();
          var id = date.toISOString();

          return privateClient.storeObject('pdfJsBookProperties', id, {
            obj: obj
          });
        }

        //removeDrink: privateClient.remove.bind(privateClient),
      }
    }
  }
};
