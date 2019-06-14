var canUpdate = true;

var SyncPdfJs = {
  name: 'syncpdfjs',
  builder: function(privateClient) {
    privateClient.declareType('pdfJsBookProperties', {
      type: 'object',
      properties: {
        page: {type: 'integer'},
        zoom: {type: 'string'},
        scrollLeft: {type: 'integer'},
        scrollTop: {type: 'integer'},
        rotation: {type: 'number'}
      },
      required: ['page', 'zoom', 'scrollLeft', 'scrollTop', 'rotation']
    });

    return {
      exports: {

        init: function() {
          privateClient.cache('');
        },

        on: privateClient.on,

        update: function(fingerprint, obj) {
          var id = fingerprint;

          console.log(canUpdate);

          if (canUpdate == true) {
            canUpdate = false;
            privateClient
              .storeObject('pdfJsBookProperties', id, obj)
              .then(() => canUpdate = true)
              .catch((err) => canUpdate = true);
          }
        },

        getObject: function(fingerprint) {
          return privateClient.getObject(fingerprint);
        }
      }
    }
  }
};
