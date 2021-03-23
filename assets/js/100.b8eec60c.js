(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{716:function(l,c,e){"use strict";e.r(c);var d=e(0),o=Object(d.a)({},(function(){var l=this,c=l.$createElement,e=l._self._c||c;return e("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[e("h1",{attrs:{id:"the-keeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-keeper"}},[l._v("#")]),l._v(" The Keeper")]),l._v(" "),e("p",[l._v("The main core of a Cosmos SDK module is a piece called the "),e("code",[l._v("Keeper")]),l._v(". It is what handles interaction with the data store, has references to other keepers for cross-module interactions, and contains most of the core functionality of a module.")]),l._v(" "),e("h2",{attrs:{id:"keeper-struct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keeper-struct"}},[l._v("#")]),l._v(" Keeper Struct")]),l._v(" "),e("p",[l._v("Your "),e("code",[l._v("nameservice.Keeper")]),l._v(" should already be defined in the "),e("code",[l._v("./x/nameservice/keeper/keeper.go")]),l._v(" file. Let's have a short introduction of the "),e("code",[l._v("keeper.go")]),l._v(" file.")]),l._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCgkvLyB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZyAjIDEKCSZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvbG9nJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jb2RlYyZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3VzZXIvbmFtZXNlcnZpY2UveC9uYW1lc2VydmljZS90eXBlcyZxdW90OwopCgovLyBLZWVwZXIgb2YgdGhlIG5hbWVzZXJ2aWNlIHN0b3JlCnR5cGUgS2VlcGVyIHN0cnVjdCB7CglDb2luS2VlcGVyIGJhbmsuS2VlcGVyCglzdG9yZUtleSAgIHNkay5TdG9yZUtleQoJY2RjICAgICAgICAqY29kZWMuQ29kZWMKCS8vIHBhcmFtc3BhY2UgdHlwZXMuUGFyYW1TdWJzcGFjZQp9CgovLyBOZXdLZWVwZXIgY3JlYXRlcyBhIG5hbWVzZXJ2aWNlIGtlZXBlcgpmdW5jIE5ld0tlZXBlcihjb2luS2VlcGVyIGJhbmsuS2VlcGVyLCBjZGMgKmNvZGVjLkNvZGVjLCBrZXkgc2RrLlN0b3JlS2V5KSBLZWVwZXIgewoJa2VlcGVyIDo9IEtlZXBlcnsKCQlDb2luS2VlcGVyOiBjb2luS2VlcGVyLAoJCXN0b3JlS2V5OiAgIGtleSwKCQljZGM6ICAgICAgICBjZGMsCgkJLy8gcGFyYW1zcGFjZTogcGFyYW1zcGFjZS5XaXRoS2V5VGFibGUodHlwZXMuUGFyYW1LZXlUYWJsZSgpKSwKCX0KCXJldHVybiBrZWVwZXIKfQoKLy8gTG9nZ2VyIHJldHVybnMgYSBtb2R1bGUtc3BlY2lmaWMgbG9nZ2VyLgpmdW5jIChrIEtlZXBlcikgTG9nZ2VyKGN0eCBzZGsuQ29udGV4dCkgbG9nLkxvZ2dlciB7CglyZXR1cm4gY3R4LkxvZ2dlcigpLldpdGgoJnF1b3Q7bW9kdWxlJnF1b3Q7LCBmbXQuU3ByaW50ZigmcXVvdDt4LyVzJnF1b3Q7LCB0eXBlcy5Nb2R1bGVOYW1lKSkKfQo="}}),l._v(" "),e("p",[l._v("A couple of notes about the code:")]),l._v(" "),e("ul",[e("li",[l._v("Two "),e("code",[l._v("cosmos-sdk")]),l._v(" packages and "),e("code",[l._v("types")]),l._v(" for your application are imported:\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types",target:"_blank",rel:"noopener noreferrer"}},[e("code",[l._v("types")]),l._v(" (as sdk)"),e("OutboundLink")],1),l._v(" - this contains commonly used types throughout the SDK.")]),l._v(" "),e("li",[e("code",[l._v("types")]),l._v(" - it contains "),e("code",[l._v("BankKeeper")]),l._v(" you have defined in previous section.")])])]),l._v(" "),e("li",[l._v("The "),e("code",[l._v("Keeper")]),l._v(" struct. In this keeper there are a couple of key pieces:\n"),e("ul",[e("li",[e("code",[l._v("types.BankKeeper")]),l._v(" - This is an interface you had defined on previous section to use "),e("code",[l._v("bank")]),l._v(" module. Including it allows code in this module to call functions from the "),e("code",[l._v("bank")]),l._v(" module. The SDK uses an "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Object-capability_model",target:"_blank",rel:"noopener noreferrer"}},[l._v("object capabilities"),e("OutboundLink")],1),l._v(" approach to accessing sections of the application state. This is to allow developers to employ a least authority approach, limiting the capabilities of a faulty or malicious module from affecting parts of state it doesn't need access to.")]),l._v(" "),e("li",[e("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/codec#Codec",target:"_blank",rel:"noopener noreferrer"}},[e("code",[l._v("*codec.Codec")]),e("OutboundLink")],1),l._v(" - This is a pointer to the codec that is used by Amino to encode and decode binary structs.")]),l._v(" "),e("li",[e("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types#StoreKey",target:"_blank",rel:"noopener noreferrer"}},[e("code",[l._v("sdk.StoreKey")]),e("OutboundLink")],1),l._v(" - This is a store key which gates access to a "),e("code",[l._v("sdk.KVStore")]),l._v(" which persists the state of your application: the Whois struct that the name points to (i.e. "),e("code",[l._v("map[name]Whois")]),l._v(").")])])])]),l._v(" "),e("h2",{attrs:{id:"getters-and-setters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getters-and-setters"}},[l._v("#")]),l._v(" Getters and Setters")]),l._v(" "),e("p",[l._v("In our "),e("code",[l._v("keeper")]),l._v(" directory we find the "),e("code",[l._v("whois.go")]),l._v(" file which has been created with our "),e("code",[l._v("starport type")]),l._v(" command.")]),l._v(" "),e("p",[l._v("The "),e("code",[l._v("type")]),l._v(" command has already scaffolded most of our required getters and setters (CRUD operations) - however, we need to make a few changes, as we are using a "),e("code",[l._v("Name")]),l._v(" as the key for each "),e("code",[l._v("Whois")]),l._v(", which is not defined in the type itself.")]),l._v(" "),e("p",[l._v("We will also be adding functions for getting specific parameters from the store based on the name. However, instead of rewriting the store getters and setters, we reuse the "),e("code",[l._v("GetWhois")]),l._v(" and "),e("code",[l._v("SetWhois")]),l._v(" functions.")]),l._v(" "),e("p",[l._v("Afterwards, your "),e("code",[l._v("x/nameservice/keeper/whois.go")]),l._v(" file should look like this.")]),l._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCgkmcXVvdDtzdHJjb252JnF1b3Q7CgoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vdXNlci9uYW1lc2VydmljZS94L25hbWVzZXJ2aWNlL3R5cGVzJnF1b3Q7CikKCi8vIEdldFdob2lzQ291bnQgZ2V0IHRoZSB0b3RhbCBudW1iZXIgb2Ygd2hvaXMKZnVuYyAoayBLZWVwZXIpIEdldFdob2lzQ291bnQoY3R4IHNkay5Db250ZXh0KSBpbnQ2NCB7CglzdG9yZSA6PSBjdHguS1ZTdG9yZShrLnN0b3JlS2V5KQoJYnl0ZUtleSA6PSBbXWJ5dGUodHlwZXMuV2hvaXNDb3VudFByZWZpeCkKCWJ6IDo9IHN0b3JlLkdldChieXRlS2V5KQoKCS8vIENvdW50IGRvZXNuJ3QgZXhpc3Q6IG5vIGVsZW1lbnQKCWlmIGJ6ID09IG5pbCB7CgkJcmV0dXJuIDAKCX0KCgkvLyBQYXJzZSBieXRlcwoJY291bnQsIGVyciA6PSBzdHJjb252LlBhcnNlSW50KHN0cmluZyhieiksIDEwLCA2NCkKCWlmIGVyciAhPSBuaWwgewoJCS8vIFBhbmljIGJlY2F1c2UgdGhlIGNvdW50IHNob3VsZCBiZSBhbHdheXMgZm9ybWF0dGFibGUgdG8gaW50NjQKCQlwYW5pYygmcXVvdDtjYW5ub3QgZGVjb2RlIGNvdW50JnF1b3Q7KQoJfQoKCXJldHVybiBjb3VudAp9CgovLyBTZXRXaG9pc0NvdW50IHNldCB0aGUgdG90YWwgbnVtYmVyIG9mIHdob2lzCmZ1bmMgKGsgS2VlcGVyKSBTZXRXaG9pc0NvdW50KGN0eCBzZGsuQ29udGV4dCwgY291bnQgaW50NjQpIHsKCXN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCglieXRlS2V5IDo9IFtdYnl0ZSh0eXBlcy5XaG9pc0NvdW50UHJlZml4KQoJYnogOj0gW11ieXRlKHN0cmNvbnYuRm9ybWF0SW50KGNvdW50LCAxMCkpCglzdG9yZS5TZXQoYnl0ZUtleSwgYnopCn0KCi8vIENyZWF0ZVdob2lzIGNyZWF0ZXMgYSB3aG9pcy4gVGhpcyBmdW5jdGlvbiBpcyBpbmNsdWRlZCBpbiBzdGFycG9ydCB0eXBlIHNjYWZmb2xkaW5nLgovLyBXZSB3b24ndCB1c2UgdGhpcyBmdW5jdGlvbiBpbiBvdXIgYXBwbGljYXRpb24sIHNvIGl0IGNhbiBiZSBjb21tZW50ZWQgb3V0LgovLyBmdW5jIChrIEtlZXBlcikgQ3JlYXRlV2hvaXMoY3R4IHNkay5Db250ZXh0LCB3aG9pcyB0eXBlcy5XaG9pcykgewovLyAJc3RvcmUgOj0gY3R4LktWU3RvcmUoay5zdG9yZUtleSkKLy8gCWtleSA6PSBbXWJ5dGUodHlwZXMuV2hvaXNQcmVmaXggKyB3aG9pcy5WYWx1ZSkKLy8gCXZhbHVlIDo9IGsuY2RjLk11c3RNYXJzaGFsQmluYXJ5TGVuZ3RoUHJlZml4ZWQod2hvaXMpCi8vIAlzdG9yZS5TZXQoa2V5LCB2YWx1ZSkKLy8gfQoKLy8gR2V0V2hvaXMgcmV0dXJucyB0aGUgd2hvaXMgaW5mb3JtYXRpb24KZnVuYyAoayBLZWVwZXIpIEdldFdob2lzKGN0eCBzZGsuQ29udGV4dCwga2V5IHN0cmluZykgKHR5cGVzLldob2lzLCBlcnJvcikgewoJc3RvcmUgOj0gY3R4LktWU3RvcmUoay5zdG9yZUtleSkKCXZhciB3aG9pcyB0eXBlcy5XaG9pcwoJYnl0ZUtleSA6PSBbXWJ5dGUodHlwZXMuV2hvaXNQcmVmaXggKyBrZXkpCgllcnIgOj0gay5jZGMuVW5tYXJzaGFsQmluYXJ5TGVuZ3RoUHJlZml4ZWQoc3RvcmUuR2V0KGJ5dGVLZXkpLCAmYW1wO3dob2lzKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHdob2lzLCBlcnIKCX0KCXJldHVybiB3aG9pcywgbmlsCn0KCi8vIFNldFdob2lzIHNldHMgYSB3aG9pcy4gV2UgbW9kaWZpZWQgdGhpcyBmdW5jdGlvbiB0byB1c2UgdGhlIGBuYW1lYCB2YWx1ZSBhcyB0aGUga2V5IGluc3RlYWQgb2YgbXNnLklECmZ1bmMgKGsgS2VlcGVyKSBTZXRXaG9pcyhjdHggc2RrLkNvbnRleHQsIG5hbWUgc3RyaW5nLCB3aG9pcyB0eXBlcy5XaG9pcykgewoKCXN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCglieiA6PSBrLmNkYy5NdXN0TWFyc2hhbEJpbmFyeUxlbmd0aFByZWZpeGVkKHdob2lzKQoJa2V5IDo9IFtdYnl0ZSh0eXBlcy5XaG9pc1ByZWZpeCArIG5hbWUpCglzdG9yZS5TZXQoa2V5LCBieikKfQoKLy8gRGVsZXRlV2hvaXMgZGVsZXRlcyBhIHdob2lzCmZ1bmMgKGsgS2VlcGVyKSBEZWxldGVXaG9pcyhjdHggc2RrLkNvbnRleHQsIGtleSBzdHJpbmcpIHsKCXN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCglzdG9yZS5EZWxldGUoW11ieXRlKHR5cGVzLldob2lzUHJlZml4ICsga2V5KSkKfQoKLy8KLy8gRnVuY3Rpb25zIHVzZWQgYnkgcXVlcmllcgovLwoKZnVuYyBsaXN0V2hvaXMoY3R4IHNkay5Db250ZXh0LCBrIEtlZXBlcikgKFtdYnl0ZSwgZXJyb3IpIHsKCXZhciB3aG9pc0xpc3QgW110eXBlcy5XaG9pcwoJc3RvcmUgOj0gY3R4LktWU3RvcmUoay5zdG9yZUtleSkKCWl0ZXJhdG9yIDo9IHNkay5LVlN0b3JlUHJlZml4SXRlcmF0b3Ioc3RvcmUsIFtdYnl0ZSh0eXBlcy5XaG9pc1ByZWZpeCkpCglmb3IgOyBpdGVyYXRvci5WYWxpZCgpOyBpdGVyYXRvci5OZXh0KCkgewoJCXZhciB3aG9pcyB0eXBlcy5XaG9pcwoJCWsuY2RjLk11c3RVbm1hcnNoYWxCaW5hcnlMZW5ndGhQcmVmaXhlZChzdG9yZS5HZXQoaXRlcmF0b3IuS2V5KCkpLCAmYW1wO3dob2lzKQoJCXdob2lzTGlzdCA9IGFwcGVuZCh3aG9pc0xpc3QsIHdob2lzKQoJfQoJcmVzIDo9IGNvZGVjLk11c3RNYXJzaGFsSlNPTkluZGVudChrLmNkYywgd2hvaXNMaXN0KQoJcmV0dXJuIHJlcywgbmlsCn0KCmZ1bmMgZ2V0V2hvaXMoY3R4IHNkay5Db250ZXh0LCBwYXRoIFtdc3RyaW5nLCBrIEtlZXBlcikgKHJlcyBbXWJ5dGUsIHNka0Vycm9yIGVycm9yKSB7CglrZXkgOj0gcGF0aFswXQoJd2hvaXMsIGVyciA6PSBrLkdldFdob2lzKGN0eCwga2V5KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyCgl9CgoJcmVzLCBlcnIgPSBjb2RlYy5NYXJzaGFsSlNPTkluZGVudChrLmNkYywgd2hvaXMpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJySlNPTk1hcnNoYWwsIGVyci5FcnJvcigpKQoJfQoKCXJldHVybiByZXMsIG5pbAp9CgovLyBSZXNvbHZlcyBhIG5hbWUsIHJldHVybnMgdGhlIHZhbHVlCmZ1bmMgcmVzb2x2ZU5hbWUoY3R4IHNkay5Db250ZXh0LCBwYXRoIFtdc3RyaW5nLCBrZWVwZXIgS2VlcGVyKSAoW11ieXRlLCBlcnJvcikgewoJdmFsdWUgOj0ga2VlcGVyLlJlc29sdmVOYW1lKGN0eCwgcGF0aFswXSkKCglpZiB2YWx1ZSA9PSAmcXVvdDsmcXVvdDsgewoJCXJldHVybiBbXWJ5dGV7fSwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclVua25vd25SZXF1ZXN0LCAmcXVvdDtjb3VsZCBub3QgcmVzb2x2ZSBuYW1lJnF1b3Q7KQoJfQoKCXJlcywgZXJyIDo9IGNvZGVjLk1hcnNoYWxKU09OSW5kZW50KGtlZXBlci5jZGMsIHR5cGVzLlF1ZXJ5UmVzUmVzb2x2ZXtWYWx1ZTogdmFsdWV9KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyckpTT05NYXJzaGFsLCBlcnIuRXJyb3IoKSkKCX0KCglyZXR1cm4gcmVzLCBuaWwKfQoKLy8gR2V0IGNyZWF0b3Igb2YgdGhlIGl0ZW0KZnVuYyAoayBLZWVwZXIpIEdldENyZWF0b3IoY3R4IHNkay5Db250ZXh0LCBrZXkgc3RyaW5nKSBzZGsuQWNjQWRkcmVzcyB7Cgl3aG9pcywgXyA6PSBrLkdldFdob2lzKGN0eCwga2V5KQoJcmV0dXJuIHdob2lzLkNyZWF0b3IKfQoKLy8gQ2hlY2sgaWYgdGhlIGtleSBleGlzdHMgaW4gdGhlIHN0b3JlCmZ1bmMgKGsgS2VlcGVyKSBFeGlzdHMoY3R4IHNkay5Db250ZXh0LCBrZXkgc3RyaW5nKSBib29sIHsKCXN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCglyZXR1cm4gc3RvcmUuSGFzKFtdYnl0ZSh0eXBlcy5XaG9pc1ByZWZpeCArIGtleSkpCn0KCi8vIFJlc29sdmVOYW1lIC0gcmV0dXJucyB0aGUgc3RyaW5nIHRoYXQgdGhlIG5hbWUgcmVzb2x2ZXMgdG8KZnVuYyAoayBLZWVwZXIpIFJlc29sdmVOYW1lKGN0eCBzZGsuQ29udGV4dCwgbmFtZSBzdHJpbmcpIHN0cmluZyB7Cgl3aG9pcywgXyA6PSBrLkdldFdob2lzKGN0eCwgbmFtZSkKCXJldHVybiB3aG9pcy5WYWx1ZQp9CgovLyBTZXROYW1lIC0gc2V0cyB0aGUgdmFsdWUgc3RyaW5nIHRoYXQgYSBuYW1lIHJlc29sdmVzIHRvCmZ1bmMgKGsgS2VlcGVyKSBTZXROYW1lKGN0eCBzZGsuQ29udGV4dCwgbmFtZSBzdHJpbmcsIHZhbHVlIHN0cmluZykgewoJd2hvaXMsIF8gOj0gay5HZXRXaG9pcyhjdHgsIG5hbWUpCgl3aG9pcy5WYWx1ZSA9IHZhbHVlCglrLlNldFdob2lzKGN0eCwgbmFtZSwgd2hvaXMpCn0KCi8vIEhhc093bmVyIC0gcmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbmFtZSBhbHJlYWR5IGhhcyBhbiBvd25lcgpmdW5jIChrIEtlZXBlcikgSGFzQ3JlYXRvcihjdHggc2RrLkNvbnRleHQsIG5hbWUgc3RyaW5nKSBib29sIHsKCXdob2lzLCBfIDo9IGsuR2V0V2hvaXMoY3R4LCBuYW1lKQoJcmV0dXJuICF3aG9pcy5DcmVhdG9yLkVtcHR5KCkKfQoKLy8gU2V0T3duZXIgLSBzZXRzIHRoZSBjdXJyZW50IG93bmVyIG9mIGEgbmFtZQpmdW5jIChrIEtlZXBlcikgU2V0Q3JlYXRvcihjdHggc2RrLkNvbnRleHQsIG5hbWUgc3RyaW5nLCBjcmVhdG9yIHNkay5BY2NBZGRyZXNzKSB7Cgl3aG9pcywgXyA6PSBrLkdldFdob2lzKGN0eCwgbmFtZSkKCXdob2lzLkNyZWF0b3IgPSBjcmVhdG9yCglrLlNldFdob2lzKGN0eCwgbmFtZSwgd2hvaXMpCn0KCi8vIEdldFByaWNlIC0gZ2V0cyB0aGUgY3VycmVudCBwcmljZSBvZiBhIG5hbWUKZnVuYyAoayBLZWVwZXIpIEdldFByaWNlKGN0eCBzZGsuQ29udGV4dCwgbmFtZSBzdHJpbmcpIHNkay5Db2lucyB7Cgl3aG9pcywgXyA6PSBrLkdldFdob2lzKGN0eCwgbmFtZSkKCXJldHVybiB3aG9pcy5QcmljZQp9CgovLyBTZXRQcmljZSAtIHNldHMgdGhlIGN1cnJlbnQgcHJpY2Ugb2YgYSBuYW1lCmZ1bmMgKGsgS2VlcGVyKSBTZXRQcmljZShjdHggc2RrLkNvbnRleHQsIG5hbWUgc3RyaW5nLCBwcmljZSBzZGsuQ29pbnMpIHsKCXdob2lzLCBfIDo9IGsuR2V0V2hvaXMoY3R4LCBuYW1lKQoJd2hvaXMuUHJpY2UgPSBwcmljZQoJay5TZXRXaG9pcyhjdHgsIG5hbWUsIHdob2lzKQp9CgovLyBDaGVjayBpZiB0aGUgbmFtZSBpcyBwcmVzZW50IGluIHRoZSBzdG9yZSBvciBub3QKZnVuYyAoayBLZWVwZXIpIElzTmFtZVByZXNlbnQoY3R4IHNkay5Db250ZXh0LCBuYW1lIHN0cmluZykgYm9vbCB7CglzdG9yZSA6PSBjdHguS1ZTdG9yZShrLnN0b3JlS2V5KQoJcmV0dXJuIHN0b3JlLkhhcyhbXWJ5dGUobmFtZSkpCn0KCi8vIEdldCBhbiBpdGVyYXRvciBvdmVyIGFsbCBuYW1lcyBpbiB3aGljaCB0aGUga2V5cyBhcmUgdGhlIG5hbWVzIGFuZCB0aGUgdmFsdWVzIGFyZSB0aGUgd2hvaXMKZnVuYyAoayBLZWVwZXIpIEdldE5hbWVzSXRlcmF0b3IoY3R4IHNkay5Db250ZXh0KSBzZGsuSXRlcmF0b3IgewoJc3RvcmUgOj0gY3R4LktWU3RvcmUoay5zdG9yZUtleSkKCXJldHVybiBzZGsuS1ZTdG9yZVByZWZpeEl0ZXJhdG9yKHN0b3JlLCBbXWJ5dGUodHlwZXMuV2hvaXNQcmVmaXgpKQp9CgovLyBHZXQgY3JlYXRvciBvZiB0aGUgaXRlbQpmdW5jIChrIEtlZXBlcikgR2V0V2hvaXNPd25lcihjdHggc2RrLkNvbnRleHQsIGtleSBzdHJpbmcpIHNkay5BY2NBZGRyZXNzIHsKCXdob2lzLCBlcnIgOj0gay5HZXRXaG9pcyhjdHgsIGtleSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwKCX0KCXJldHVybiB3aG9pcy5DcmVhdG9yCn0KCi8vIENoZWNrIGlmIHRoZSBrZXkgZXhpc3RzIGluIHRoZSBzdG9yZQpmdW5jIChrIEtlZXBlcikgV2hvaXNFeGlzdHMoY3R4IHNkay5Db250ZXh0LCBrZXkgc3RyaW5nKSBib29sIHsKCXN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCglyZXR1cm4gc3RvcmUuSGFzKFtdYnl0ZSh0eXBlcy5XaG9pc1ByZWZpeCArIGtleSkpCn0K"}}),l._v(" "),e("p",[l._v("Next, its time to move onto describing how users interact with your new store using "),e("code",[l._v("Msgs")]),l._v(" and "),e("code",[l._v("Handlers")]),l._v(".")])],1)}),[],!1,null,null,null);c.default=o.exports}}]);