/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wiys1gdf3km8cba",
    "created": "2024-09-09 12:21:37.583Z",
    "updated": "2024-09-09 12:21:37.583Z",
    "name": "homepage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ctkuq99v",
        "name": "cover",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "f1lhw5tc",
        "name": "sector_image",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": "@request.auth.id != ''",
    "updateRule": "@request.auth.id != ''",
    "deleteRule": "@request.auth.id != ''",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wiys1gdf3km8cba");

  return dao.deleteCollection(collection);
})
