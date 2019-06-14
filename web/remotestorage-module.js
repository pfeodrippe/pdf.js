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
          var id = "PDFStorage#" + date.toISOString();

          // Remove existing keys
          privateClient.getListing('')
            .then(listing =>
                  {
                    console.log(listing);
                    Object.keys(listing)
                      .map(function (v) {
                        privateClient.remove(v);
                      });
                    privateClient.storeObject('pdfJsBookProperties', id, {
                      obj: obj
                    });
                  });
        }
      }
    }
  }
};
