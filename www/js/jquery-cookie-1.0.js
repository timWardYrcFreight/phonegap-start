/*
* jQuery Cookie plugin
*
* Copyright (c) 2010 Klaus Hartl (stilbuero.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/
jQuery.cookie=function(k,v,o){if(arguments.length>1&&(v===null||typeof v!=="object")){o=jQuery.extend({},o);if(v===null){o.expires=-1;}if(typeof o.expires==='number'){var days=o.expires,t=o.expires=new Date();t.setDate(t.getDate()+days);}return (document.cookie=[encodeURIComponent(k),'=',o.raw?String(v):encodeURIComponent(String(v)),o.expires?'; expires='+o.expires.toUTCString():'',o.path?'; path='+o.path:'',o.domain?'; domain='+o.domain:'',o.secure?'; secure':''].join(''));}o=v||{};var result,decode=o.raw?function(s){return s;}:decodeURIComponent;return (result=new RegExp('(?:^|; )'+encodeURIComponent(k)+'=([^;]*)').exec(document.cookie))?decode(result[1].replace(/\+/," ")):null;};
