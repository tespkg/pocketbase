/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wjgecyxwverdj6c",
    "created": "2024-09-09 13:00:07.114Z",
    "updated": "2024-09-09 13:00:07.114Z",
    "name": "visuals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ftsvwcsj",
        "name": "title_en",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lo7upool",
        "name": "title_ar",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ixyb2dod",
        "name": "cover_image",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "1bp57azl51u4zmw",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "8lpm5lgp",
        "name": "attachments",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "1bp57azl51u4zmw",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != ''",
    "updateRule": "@request.auth.id != ''",
    "deleteRule": "@request.auth.id != ''",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wjgecyxwverdj6c");

  return dao.deleteCollection(collection);
})
