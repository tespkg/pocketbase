# CMS API:

List of api:

- [about](#collection-about)

- [specializations](#collection-specializations)

- [organizational_chart](#collection-organizational_chart)

- [organizational_chart](#collection-minister_speech)

- [sectors](#collection-sectors)

- [ministry_news](#collection-ministry_news)

- [versions](#collection-versions)

- [visuals](#collection-visuals)

- [acoustics](#collection-acoustics)

- [information_designs](#collection-information_designs)

- [rules](#collection-rules)

- [marketing](#collection-marketing)

- [topics](#collection-topics)

- [Public Api](#public-api)

## Admin api:

### Collection "about"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>about</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>vision_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>mission_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>vision_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>mission_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr></tbody></table>

<strong>Response: 200</strong>
```json
{
  "id": "RECORD_ID",
  "collectionId": "7l3df7dfab5pbor",
  "collectionName": "about",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "vision_en": "test",
  "mission_en": "test",
  "title_ar": "test",
  "vision_ar": "test",
  "mission_ar": "test"
}
```
<br>
<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>about</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to update.</td></tr></tbody></table>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>vision_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>mission_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>vision_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>mission_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr></tbody></table>

<strong>Response: 200</strong>
```json
{
  "id": "RECORD_ID",
  "collectionId": "7l3df7dfab5pbor",
  "collectionName": "about",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "vision_en": "test",
  "mission_en": "test",
  "title_ar": "test",
  "vision_ar": "test",
  "mission_ar": "test"
}
```
<br>
<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>about</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

<br>

### Collection "specializations"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>specializations</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "z9qut6efyilfspl",
  "collectionName": "specializations",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "description_en": "test",
  "title_ar": "test",
  "description_ar": "test",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>specializations</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "z9qut6efyilfspl",
  "collectionName": "specializations",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "description_en": "test",
  "title_ar": "test",
  "description_ar": "test",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>specializations</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```
- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "organizational_chart"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>organizational_chart</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "87j52gvwuakjv6t",
  "collectionName": "organizational_chart",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "title_en": "test",
  "title_ar": "test",
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>organizational_chart</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "87j52gvwuakjv6t",
  "collectionName": "organizational_chart",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "title_en": "test",
  "title_ar": "test",
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>organizational_chart</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>


### Collection "minister_speech"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>minister_speech</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "sctld81dlg1u119",
  "collectionName": "minister_speech",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "title_en": "test",
  "title_ar": "test",
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>minister_speech</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "sctld81dlg1u119",
  "collectionName": "minister_speech",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "title_en": "test",
  "title_ar": "test",
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>minister_speech</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```
- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "sectors"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>sectors</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>image</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>sector</span></div></td> <td><span class="label">String</span></td> <td>Values: FoodSafetyAndQuality, FoodSecurity, WaterResources, FishWealth, Livestock, Agriculture</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "0rwu1rxqbcsixb3",
  "collectionName": "sectors",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "image": [
    "RELATION_RECORD_ID"
  ],
  "title_en": "test",
  "title_ar": "test",
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ],
  "sector": "FoodSafetyAndQuality"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>sectors</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>image</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>sector</span></div></td> <td><span class="label">String</span></td> <td></td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "0rwu1rxqbcsixb3",
  "collectionName": "sectors",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "image": [
    "RELATION_RECORD_ID"
  ],
  "title_en": "test",
  "title_ar": "test",
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ],
  "sector": "FoodSafetyAndQuality"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>sectors</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```
- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "ministry_news"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>ministry_news</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>caption_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>caption_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>author</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish_date</span></div></td> <td><span class="label">String</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>author_name</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>author_avatar</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.
<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "lp30igepz1qhqez",
  "collectionName": "ministry_news",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "cover_image": "RELATION_RECORD_ID",
  "title_en": "test",
  "title_ar": "test",
  "caption_en": "test",
  "caption_ar": "test",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ],
  "author": true,
  "publish": true,
  "publish_date": "2022-01-01 10:00:00.123Z",
  "author_name": "test",
  "author_avatar": "RELATION_RECORD_ID"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>ministry_news</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>caption_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>caption_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>author</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish_date</span></div></td> <td><span class="label">String</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>author_name</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>author_avatar</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "lp30igepz1qhqez",
  "collectionName": "ministry_news",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "cover_image": "RELATION_RECORD_ID",
  "title_en": "test",
  "title_ar": "test",
  "caption_en": "test",
  "caption_ar": "test",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ],
  "author": true,
  "publish": true,
  "publish_date": "2022-01-01 10:00:00.123Z",
  "author_name": "test",
  "author_avatar": "RELATION_RECORD_ID"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>ministry_news</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.
<br>

### Collection "versions"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>versions</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "5utlwblt95cvncs",
  "collectionName": "versions",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "cover": "RELATION_RECORD_ID",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>versions</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "5utlwblt95cvncs",
  "collectionName": "versions",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "cover": "RELATION_RECORD_ID",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>versions</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "visuals"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>visuals</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "wjgecyxwverdj6c",
  "collectionName": "visuals",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "cover_image": "RELATION_RECORD_ID",
  "attachments": "RELATION_RECORD_ID"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>visuals</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.


```json
{
  "id": "RECORD_ID",
  "collectionId": "wjgecyxwverdj6c",
  "collectionName": "visuals",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "cover_image": "RELATION_RECORD_ID",
  "attachments": "RELATION_RECORD_ID"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>visuals</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```
- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "acoustics"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>acoustics</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>audio</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>link</span></div></td> <td><span class="label">String</span></td> <td>URL address.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish_date</span></div></td> <td><span class="label">String</span></td> <td></td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "xdnkjvbvv8c5jmk",
  "collectionName": "acoustics",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "cover_image": "RELATION_RECORD_ID",
  "audio": "RELATION_RECORD_ID",
  "title_en": "test",
  "title_ar": "test",
  "link": "https://example.com",
  "publish": true,
  "publish_date": "2022-01-01 10:00:00.123Z"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>acoustics</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>audio</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>link</span></div></td> <td><span class="label">String</span></td> <td>URL address.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish_date</span></div></td> <td><span class="label">String</span></td> <td></td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "xdnkjvbvv8c5jmk",
  "collectionName": "acoustics",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "cover_image": "RELATION_RECORD_ID",
  "audio": "RELATION_RECORD_ID",
  "title_en": "test",
  "title_ar": "test",
  "link": "https://example.com",
  "publish": true,
  "publish_date": "2022-01-01 10:00:00.123Z"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>acoustics</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "information_designs"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>information_designs</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(*) Relation record id.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "2oplca8rjjbl036",
  "collectionName": "information_designs",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "cover_image": "RELATION_RECORD_ID"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>information_designs</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>cover_image</span></div></td> <td><span class="label">String</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "2oplca8rjjbl036",
  "collectionName": "information_designs",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "cover_image": "RELATION_RECORD_ID"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>information_designs</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "rules"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>rules</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>law_number</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>year</span></div></td> <td><span class="label">Number</span></td> <td>Number value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>classification_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>classification_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>type</span></div></td> <td><span class="label">String</span></td> <td></td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "e6mgymg6p1fbvsd",
  "collectionName": "rules",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "law_number": "test",
  "year": 123,
  "classification_en": "test",
  "classification_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ],
  "type": "Law"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>rules</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>law_number</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>year</span></div></td> <td><span class="label">Number</span></td> <td>Number value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>classification_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>classification_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>type</span></div></td> <td><span class="label">String</span></td> <td></td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "e6mgymg6p1fbvsd",
  "collectionName": "rules",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "law_number": "test",
  "year": 123,
  "classification_en": "test",
  "classification_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ],
  "type": "Law"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>rules</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### Collection "marketing"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>marketing</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish_date</span></div></td> <td><span class="label">String</span></td> <td>Format: "2022-01-01 10:00:00.123Z"</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>topic</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Required</span> <span>sector</span></div></td> <td><span class="label">String</span></td> <td>Values: Marketing, AgriculturalInvestment, FishInvestment</td> </tr></tbody></table>

- (*): the array accepts only id of records of topics collection so you will need to call POST method of topics collection to create a topic record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "56rlyiyuli6zojz",
  "collectionName": "marketing",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "publish": true,
  "publish_date": "2022-01-01 10:00:00.123Z",
  "topic": [
    "RELATION_RECORD_ID"
  ],
  "sector": "Marketing"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>marketing</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>title_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish</span></div></td> <td><span class="label">Boolean</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>publish_date</span></div></td> <td><span class="label">String</span></td> <td>Format: "2022-01-01 10:00:00.123Z"</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>topic</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Required</span> <span>sector</span></div></td> <td><span class="label">String</span></td> <td>Values: Marketing, AgriculturalInvestment, FishInvestment</td> </tr></tbody></table>

- (**): the array accepts only id of records of topics collection so int this case you will need to use a combination of POST - PATCH - DELETE from topics collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "56rlyiyuli6zojz",
  "collectionName": "marketing",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "title_en": "test",
  "title_ar": "test",
  "publish": true,
  "publish_date": "2022-01-01 10:00:00.123Z",
  "topic": [
    "RELATION_RECORD_ID"
  ],
  "sector": "Marketing"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>marketing</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

- Make sure to call for  DELETE api of topics collection to delete records of topics related to current record of marketing collection before it's deletion.

<br>

### collection "topics"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>topics</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>topic_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>topic_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(*) Relation record ids.</td> </tr></tbody></table>

- (*): the array accepts only id of records of attachments collection so you will need to call POST method of attachments collection to create an attachment record then sets the id returned by POST into the array.

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "ci8h0c7ixhgn2b9",
  "collectionName": "topics",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "topic_en": "test",
  "topic_ar": "test",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>topics</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>topic_en</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>topic_ar</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>images</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_en</span></div></td> <td><span class="label">String</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>description_ar</span></div></td> <td><span class="label">String</span></td> <td></td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>attachments</span></div></td> <td><span class="label">Array&lt;String&gt;</span></td> <td>(**) Relation record id.</td> </tr></tbody></table>

- (**): the array accepts only id of records of attachments collection so int this case you will need to use a combination of POST - PATCH - DELETE from attachments collection in order to achieve the desired result.

```json
{
  "id": "RECORD_ID",
  "collectionId": "ci8h0c7ixhgn2b9",
  "collectionName": "topics",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "topic_en": "test",
  "topic_ar": "test",
  "images": [
    "RELATION_RECORD_ID"
  ],
  "description_en": "test",
  "description_ar": "test",
  "attachments": [
    "RELATION_RECORD_ID"
  ]
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>topics</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```
- Make sure to call for DELETE api of attachment collection to delete records of attachment before deleting this record.

<br>

### collection "attachments"
<div class="alert alert-success"><strong class="label label-primary">POST</strong> <div class="content"><p>/api/collections/<strong>attachments</strong>/records</p></div> </div>

<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>id</span></div></td> <td><span class="label">String</span></td> <td><strong>15 characters string</strong> to store as record ID.
                <br>
                If not set, it will be auto generated.</td></tr>  <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>url</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>bucket</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>object</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>size</span></div></td> <td><span class="label">Number</span></td> <td>Number value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>file_name</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>subject</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>content_type</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr></tbody></table>

<strong>Response: 200</strong>

```json
{
  "id": "RECORD_ID",
  "collectionId": "1bp57azl51u4zmw",
  "collectionName": "attachments",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "url": "test",
  "bucket": "test",
  "object": "test",
  "size": 123,
  "file_name": "test",
  "subject": "test",
  "content_type": "test"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">PATCH</strong> <div class="content"><p>/api/collections/<strong>attachments</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Body:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Field</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>url</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>bucket</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>object</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>size</span></div></td> <td><span class="label">Number</span></td> <td>Number value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>file_name</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>subject</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr><tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>content_type</span></div></td> <td><span class="label">String</span></td> <td>Plain text value.</td> </tr></tbody></table>

```json
{
  "id": "RECORD_ID",
  "collectionId": "1bp57azl51u4zmw",
  "collectionName": "attachments",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "url": "test",
  "bucket": "test",
  "object": "test",
  "size": 123,
  "file_name": "test",
  "subject": "test",
  "content_type": "test"
}
```
<br>

<div class="alert alert-warning"><strong class="label label-primary">DELETE</strong> <div class="content"><p>/api/collections/<strong>attachments</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Params:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to delete.</td></tr></tbody></table>
<strong>Response: 204</strong>

```
null
```

<br>

## Public API

<div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong>collection_name</strong>/records</p></div> </div>

<strong>Query Parameters:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>page</td> <td><span class="label">Number</span></td> <td>The page (aka. offset) of the paginated list (default to 1).</td></tr> <tr><td>perPage</td> <td><span class="label">Number</span></td> <td>Specify the max returned records per page (default to 30).</td></tr> <tr><td>sort</td> <td><span class="label">String</span></td> <td>Specify the records order attribute(s). <br>
                Add <code>-</code> / <code>+</code> (default) in front of the attribute for DESC / ASC order.
                Ex.:
                <div class="code-wrapper prism-light  svelte-s3jkbp"><code class="svelte-s3jkbp"><span class="token comment">// DESC by created and ASC by id</span>
<span class="token operator">?</span>sort<span class="token operator">=</span><span class="token operator">-</span>created<span class="token punctuation">,</span>id</code></div> <p><strong>Supported record sort fields:</strong> <br> <code>@random</code>,
                    <code>id</code>, <code>created</code>, <code>updated</code>, <code>images</code>, <code>title_en</code>, <code>title_ar</code>, <code>description_en</code>, <code>description_ar</code>, <code>attachments</code></p></td></tr> <tr><td>filter</td> <td><span class="label">String</span></td> <td>Filter the returned records. Ex.:
                <div class="code-wrapper prism-light  svelte-s3jkbp"><code class="svelte-s3jkbp"><span class="token operator">?</span>filter<span class="token operator">=</span><span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token string">'abc'</span> <span class="token operator">&amp;&amp;</span> created<span class="token operator">&gt;</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span></code></div><p>The syntax basically follows the format
        <code><span class="txt-success">OPERAND</span> <span class="txt-danger">OPERATOR</span> <span class="txt-success">OPERAND</span></code>, where:</p> <ul><li><code class="txt-success">OPERAND</code> - could be any of the above field literal, string (single
            or double quoted), number, null, true, false</li> <li><code class="txt-danger">OPERATOR</code> - is one of:
            <br> <ul><li><code class="filter-op svelte-1w7s5nw">=</code> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-1w7s5nw">!=</code> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-1w7s5nw">&gt;</code> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-1w7s5nw">&gt;=</code> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw">&lt;</code> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-1w7s5nw">&lt;=</code> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw">~</code> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw">!~</code> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw">?=</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Equal</span></li> <li><code class="filter-op svelte-1w7s5nw">?!=</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT equal</span></li> <li><code class="filter-op svelte-1w7s5nw">?&gt;</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than</span></li> <li><code class="filter-op svelte-1w7s5nw">?&gt;=</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Greater than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw">?&lt;</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than</span></li> <li><code class="filter-op svelte-1w7s5nw">?&lt;=</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Less than or equal</span></li> <li><code class="filter-op svelte-1w7s5nw">?~</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li> <li><code class="filter-op svelte-1w7s5nw">?!~</code> <em class="txt-hint">Any/At least one of</em> <span class="txt">NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                        wildcard match)</span></li></ul></li></ul> <p>To group and combine several expressions you could use brackets
        <code>(...)</code>, <code>&amp;&amp;</code> (AND) and <code>||</code> (OR) tokens.</p></td></tr> <tr><td>expand</td> <td><span class="label">String</span></td> <td>Auto expand record relations. Ex.:
                <div class="code-wrapper prism-light  svelte-s3jkbp"><code class="svelte-s3jkbp"><span class="token operator">?</span>expand<span class="token operator">=</span>relField1<span class="token punctuation">,</span>relField2<span class="token punctuation">.</span>subRelField</code></div>
                Supports up to 6-levels depth nested relations expansion. <br>
                The expanded relations will be appended to each individual record under the
                <code>expand</code> property (eg. <code>"expand": {"relField1": {...}, ...}</code>).
                <br>
                Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr> <tr><td id="query-page">fields</td> <td><span class="label">String</span></td> <td><p>Comma separated string of the fields to return in the JSON response
            <em>(by default returns all fields)</em>. Ex.:
            <div class="code-wrapper prism-light  svelte-s3jkbp"><code class="svelte-s3jkbp"><span class="token operator">?</span>fields<span class="token operator">=</span><span class="token operator">*</span><span class="token punctuation">,</span>expand<span class="token punctuation">.</span>relField<span class="token punctuation">.</span>name</code></div></p> <p><code>*</code> targets all keys from the specific depth level.</p> <p>In addition, the following field modifiers are also supported:</p> <ul><li><code>:excerpt(maxLength, withEllipsis?)</code> <br>
                Returns a short plain text version of the field string value.
                <br>
                Ex.:
                <code>?fields=*,description:excerpt(200,true)</code></li></ul></td></tr> <tr><td id="query-page">skipTotal</td> <td><span class="label">Boolean</span></td> <td>If it is set the total counts query will be skipped and the response fields
                <code>totalItems</code> and <code>totalPages</code> will have <code>-1</code> value.
                <br>
                This could drastically speed up the search queries when the total counters are not needed or cursor
                based pagination is used.
                <br>
                For optimization purposes, it is set by default for the
                <code>getFirstListItem()</code>
                and
                <code>getFullList()</code> SDKs methods.</td></tr></tbody></table>

<strong>Response: 200 </strong>

```json
{
  "page": 1,
  "perPage": 30,
  "totalPages": 1,
  "totalItems": 2,
  "items": [ // example from minister_speech collection
    {
      "id": "RECORD_ID",
      "collectionId": "sctld81dlg1u119",
      "collectionName": "minister_speech",
      "created": "2022-01-01 01:00:00.123Z",
      "updated": "2022-01-01 23:59:59.456Z",
      "images": "JSON",
      "title_en": "test",
      "title_ar": "test",
      "description_en": "test",
      "description_ar": "test",
      "attachments": "JSON"
    },
    {
      "id": "RECORD_ID",
      "collectionId": "sctld81dlg1u119",
      "collectionName": "minister_speech",
      "created": "2022-01-01 01:00:00.123Z",
      "updated": "2022-01-01 23:59:59.456Z",
      "images": "JSON",
      "title_en": "test",
      "title_ar": "test",
      "description_en": "test",
      "description_ar": "test",
      "attachments": "JSON"
    }
  ]
}
```
<br>

<div class="alert alert-info"><strong class="label label-primary">GET</strong> <div class="content"><p>/api/collections/<strong>collection_name</strong>/records/<strong>:id</strong></p></div> </div>
<strong>Path Param: </strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>ID of the record to view.</td></tr></tbody></table>

<strong>Query Parameters:</strong>
<table class="table-compact table-border m-b-base"><thead><tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr></thead> <tbody><tr><td>expand</td> <td><span class="label">String</span></td> <td>Auto expand record relations. Ex.:
                <div class="code-wrapper prism-light  svelte-s3jkbp"><code class="svelte-s3jkbp"><span class="token operator">?</span>expand<span class="token operator">=</span>relField1<span class="token punctuation">,</span>relField2<span class="token punctuation">.</span>subRelField</code></div>
                Supports up to 6-levels depth nested relations expansion. <br>
                The expanded relations will be appended to the record under the
                <code>expand</code> property (eg. <code>"expand": {"relField1": {...}, ...}</code>).
                <br>
                Only the relations to which the request user has permissions to <strong>view</strong> will be expanded.</td></tr> <tr><td id="query-page">fields</td> <td><span class="label">String</span></td> <td><p>Comma separated string of the fields to return in the JSON response
            <em>(by default returns all fields)</em>. Ex.:
            <div class="code-wrapper prism-light  svelte-s3jkbp"><code class="svelte-s3jkbp"><span class="token operator">?</span>fields<span class="token operator">=</span><span class="token operator">*</span><span class="token punctuation">,</span>expand<span class="token punctuation">.</span>relField<span class="token punctuation">.</span>name</code></div></p> <p><code>*</code> targets all keys from the specific depth level.</p> <p>In addition, the following field modifiers are also supported:</p> <ul><li><code>:excerpt(maxLength, withEllipsis?)</code> <br>
                Returns a short plain text version of the field string value.
                <br>
                Ex.:
                <code>?fields=*,description:excerpt(200,true)</code></li></ul></td></tr></tbody></table>

<strong>Response: 200</strong>
```json
{  // example from minister_speech collection
  "id": "RECORD_ID",
  "collectionId": "sctld81dlg1u119",
  "collectionName": "minister_speech",
  "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "images": "JSON",
  "title_en": "test",
  "title_ar": "test",
  "description_en": "test",
  "description_ar": "test",
  "attachments": "JSON"
}
```