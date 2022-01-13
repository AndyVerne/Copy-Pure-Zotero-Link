{
"translatorID":"3b7ed65f-d488-4efc-9c03-d12e00c6d446",
"translatorType":2,
"label":"Pure Zotero Link for Copy",
"creator":"Andy Verne",
"target":"html",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2012-07-17 22:27:00"
}

function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
		Zotero.write("zotero://select/items/");
		var library_id = item.libraryID ? item.libraryID : 0;
		Zotero.write(library_id+"_"+item.key);
	}
}
