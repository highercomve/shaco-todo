(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! (C) WebReflection Mit Style License */
(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");
},{}],2:[function(require,module,exports){
(function (process){

/**
 * @license
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A cached reference to the hasOwnProperty function.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * A constructor function that will create blank objects.
 * @constructor
 */
function Blank() {}

Blank.prototype = Object.create(null);

/**
 * Used to prevent property collisions between our "map" and its prototype.
 * @param {!Object<string, *>} map The map to check.
 * @param {string} property The property to check.
 * @return {boolean} Whether map has property.
 */
var has = function (map, property) {
  return hasOwnProperty.call(map, property);
};

/**
 * Creates an map object without a prototype.
 * @return {!Object}
 */
var createMap = function () {
  return new Blank();
};

/**
 * Keeps track of information needed to perform diffs for a given DOM node.
 * @param {!string} nodeName
 * @param {?string=} key
 * @constructor
 */
function NodeData(nodeName, key) {
  /**
   * The attributes and their values.
   * @const {!Object<string, *>}
   */
  this.attrs = createMap();

  /**
   * An array of attribute name/value pairs, used for quickly diffing the
   * incomming attributes to see if the DOM node's attributes need to be
   * updated.
   * @const {Array<*>}
   */
  this.attrsArr = [];

  /**
   * The incoming attributes for this Node, before they are updated.
   * @const {!Object<string, *>}
   */
  this.newAttrs = createMap();

  /**
   * Whether or not the statics have been applied for the node yet.
   * {boolean}
   */
  this.staticsApplied = false;

  /**
   * The key used to identify this node, used to preserve DOM nodes when they
   * move within their parent.
   * @const
   */
  this.key = key;

  /**
   * Keeps track of children within this node by their key.
   * {!Object<string, !Element>}
   */
  this.keyMap = createMap();

  /**
   * Whether or not the keyMap is currently valid.
   * @type {boolean}
   */
  this.keyMapValid = true;

  /**
   * Whether or the associated node is, or contains, a focused Element.
   * @type {boolean}
   */
  this.focused = false;

  /**
   * The node name for this node.
   * @const {string}
   */
  this.nodeName = nodeName;

  /**
   * @type {?string}
   */
  this.text = null;
}

/**
 * Initializes a NodeData object for a Node.
 *
 * @param {Node} node The node to initialize data for.
 * @param {string} nodeName The node name of node.
 * @param {?string=} key The key that identifies the node.
 * @return {!NodeData} The newly initialized data object
 */
var initData = function (node, nodeName, key) {
  var data = new NodeData(nodeName, key);
  node['__incrementalDOMData'] = data;
  return data;
};

/**
 * Retrieves the NodeData object for a Node, creating it if necessary.
 *
 * @param {?Node} node The Node to retrieve the data for.
 * @return {!NodeData} The NodeData for this Node.
 */
var getData = function (node) {
  importNode(node);
  return node['__incrementalDOMData'];
};

/**
 * Imports node and its subtree, initializing caches.
 *
 * @param {?Node} node The Node to import.
 */
var importNode = function (node) {
  if (node['__incrementalDOMData']) {
    return;
  }

  var isElement = node instanceof Element;
  var nodeName = isElement ? node.localName : node.nodeName;
  var key = isElement ? node.getAttribute('key') : null;
  var data = initData(node, nodeName, key);

  if (key) {
    getData(node.parentNode).keyMap[key] = node;
  }

  if (isElement) {
    var attributes = node.attributes;
    var attrs = data.attrs;
    var newAttrs = data.newAttrs;
    var attrsArr = data.attrsArr;

    for (var i = 0; i < attributes.length; i += 1) {
      var attr = attributes[i];
      var name = attr.name;
      var value = attr.value;

      attrs[name] = value;
      newAttrs[name] = undefined;
      attrsArr.push(name);
      attrsArr.push(value);
    }
  }

  for (var child = node.firstChild; child; child = child.nextSibling) {
    importNode(child);
  }
};

/**
 * Gets the namespace to create an element (of a given tag) in.
 * @param {string} tag The tag to get the namespace for.
 * @param {?Node} parent
 * @return {?string} The namespace to create the tag in.
 */
var getNamespaceForTag = function (tag, parent) {
  if (tag === 'svg') {
    return 'http://www.w3.org/2000/svg';
  }

  if (getData(parent).nodeName === 'foreignObject') {
    return null;
  }

  return parent.namespaceURI;
};

/**
 * Creates an Element.
 * @param {Document} doc The document with which to create the Element.
 * @param {?Node} parent
 * @param {string} tag The tag for the Element.
 * @param {?string=} key A key to identify the Element.
 * @return {!Element}
 */
var createElement = function (doc, parent, tag, key) {
  var namespace = getNamespaceForTag(tag, parent);
  var el = undefined;

  if (namespace) {
    el = doc.createElementNS(namespace, tag);
  } else {
    el = doc.createElement(tag);
  }

  initData(el, tag, key);

  return el;
};

/**
 * Creates a Text Node.
 * @param {Document} doc The document with which to create the Element.
 * @return {!Text}
 */
var createText = function (doc) {
  var node = doc.createTextNode('');
  initData(node, '#text', null);
  return node;
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var notifications = {
  /**
   * Called after patch has compleated with any Nodes that have been created
   * and added to the DOM.
   * @type {?function(Array<!Node>)}
   */
  nodesCreated: null,

  /**
   * Called after patch has compleated with any Nodes that have been removed
   * from the DOM.
   * Note it's an applications responsibility to handle any childNodes.
   * @type {?function(Array<!Node>)}
   */
  nodesDeleted: null
};

/**
 * Keeps track of the state of a patch.
 * @constructor
 */
function Context() {
  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.created = notifications.nodesCreated && [];

  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.deleted = notifications.nodesDeleted && [];
}

/**
 * @param {!Node} node
 */
Context.prototype.markCreated = function (node) {
  if (this.created) {
    this.created.push(node);
  }
};

/**
 * @param {!Node} node
 */
Context.prototype.markDeleted = function (node) {
  if (this.deleted) {
    this.deleted.push(node);
  }
};

/**
 * Notifies about nodes that were created during the patch opearation.
 */
Context.prototype.notifyChanges = function () {
  if (this.created && this.created.length > 0) {
    notifications.nodesCreated(this.created);
  }

  if (this.deleted && this.deleted.length > 0) {
    notifications.nodesDeleted(this.deleted);
  }
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
  * Keeps track whether or not we are in an attributes declaration (after
  * elementOpenStart, but before elementOpenEnd).
  * @type {boolean}
  */
var inAttributes = false;

/**
  * Keeps track whether or not we are in an element that should not have its
  * children cleared.
  * @type {boolean}
  */
var inSkip = false;

/**
 * Makes sure that there is a current patch context.
 * @param {string} functionName
 * @param {*} context
 */
var assertInPatch = function (functionName, context) {
  if (!context) {
    throw new Error('Cannot call ' + functionName + '() unless in patch.');
  }
};

/**
 * Makes sure that a patch closes every node that it opened.
 * @param {?Node} openElement
 * @param {!Node|!DocumentFragment} root
 */
var assertNoUnclosedTags = function (openElement, root) {
  if (openElement === root) {
    return;
  }

  var currentElement = openElement;
  var openTags = [];
  while (currentElement && currentElement !== root) {
    openTags.push(currentElement.nodeName.toLowerCase());
    currentElement = currentElement.parentNode;
  }

  throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
};

/**
 * Makes sure that the caller is not where attributes are expected.
 * @param {string} functionName
 */
var assertNotInAttributes = function (functionName) {
  if (inAttributes) {
    throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
  }
};

/**
 * Makes sure that the caller is not inside an element that has declared skip.
 * @param {string} functionName
 */
var assertNotInSkip = function (functionName) {
  if (inSkip) {
    throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
  }
};

/**
 * Makes sure that the caller is where attributes are expected.
 * @param {string} functionName
 */
var assertInAttributes = function (functionName) {
  if (!inAttributes) {
    throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
  }
};

/**
 * Makes sure the patch closes virtual attributes call
 */
var assertVirtualAttributesClosed = function () {
  if (inAttributes) {
    throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
  }
};

/**
  * Makes sure that tags are correctly nested.
  * @param {string} nodeName
  * @param {string} tag
  */
var assertCloseMatchesOpenTag = function (nodeName, tag) {
  if (nodeName !== tag) {
    throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
  }
};

/**
 * Makes sure that no children elements have been declared yet in the current
 * element.
 * @param {string} functionName
 * @param {?Node} previousNode
 */
var assertNoChildrenDeclaredYet = function (functionName, previousNode) {
  if (previousNode !== null) {
    throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
  }
};

/**
 * Checks that a call to patchOuter actually patched the element.
 * @param {?Node} startNode The value for the currentNode when the patch
 *     started.
 * @param {?Node} currentNode The currentNode when the patch finished.
 * @param {?Node} expectedNextNode The Node that is expected to follow the
 *    currentNode after the patch;
 * @param {?Node} expectedPrevNode The Node that is expected to preceed the
 *    currentNode after the patch.
 */
var assertPatchElementNoExtras = function (startNode, currentNode, expectedNextNode, expectedPrevNode) {
  var wasUpdated = currentNode.nextSibling === expectedNextNode && currentNode.previousSibling === expectedPrevNode;
  var wasChanged = currentNode.nextSibling === startNode.nextSibling && currentNode.previousSibling === expectedPrevNode;
  var wasRemoved = currentNode === startNode;

  if (!wasUpdated && !wasChanged && !wasRemoved) {
    throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
  }
};

/**
 * Updates the state of being in an attribute declaration.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInAttributes = function (value) {
  var previous = inAttributes;
  inAttributes = value;
  return previous;
};

/**
 * Updates the state of being in a skip element.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInSkip = function (value) {
  var previous = inSkip;
  inSkip = value;
  return previous;
};

/**
 * Copyright 2016 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {!Node} node
 * @return {boolean} True if the node the root of a document, false otherwise.
 */
var isDocumentRoot = function (node) {
  // For ShadowRoots, check if they are a DocumentFragment instead of if they
  // are a ShadowRoot so that this can work in 'use strict' if ShadowRoots are
  // not supported.
  return node instanceof Document || node instanceof DocumentFragment;
};

/**
 * @param {!Node} node The node to start at, inclusive.
 * @param {?Node} root The root ancestor to get until, exclusive.
 * @return {!Array<!Node>} The ancestry of DOM nodes.
 */
var getAncestry = function (node, root) {
  var ancestry = [];
  var cur = node;

  while (cur !== root) {
    ancestry.push(cur);
    cur = cur.parentNode;
  }

  return ancestry;
};

/**
 * @param {!Node} node
 * @return {!Node} The root node of the DOM tree that contains node.
 */
var getRoot = function (node) {
  var cur = node;
  var prev = cur;

  while (cur) {
    prev = cur;
    cur = cur.parentNode;
  }

  return prev;
};

/**
 * @param {!Node} node The node to get the activeElement for.
 * @return {?Element} The activeElement in the Document or ShadowRoot
 *     corresponding to node, if present.
 */
var getActiveElement = function (node) {
  var root = getRoot(node);
  return isDocumentRoot(root) ? root.activeElement : null;
};

/**
 * Gets the path of nodes that contain the focused node in the same document as
 * a reference node, up until the root.
 * @param {!Node} node The reference node to get the activeElement for.
 * @param {?Node} root The root to get the focused path until.
 * @return {!Array<Node>}
 */
var getFocusedPath = function (node, root) {
  var activeElement = getActiveElement(node);

  if (!activeElement || !node.contains(activeElement)) {
    return [];
  }

  return getAncestry(activeElement, root);
};

/**
 * Like insertBefore, but instead instead of moving the desired node, instead
 * moves all the other nodes after.
 * @param {?Node} parentNode
 * @param {!Node} node
 * @param {?Node} referenceNode
 */
var moveBefore = function (parentNode, node, referenceNode) {
  var insertReferenceNode = node.nextSibling;
  var cur = referenceNode;

  while (cur !== node) {
    var next = cur.nextSibling;
    parentNode.insertBefore(cur, insertReferenceNode);
    cur = next;
  }
};

/** @type {?Context} */
var context = null;

/** @type {?Node} */
var currentNode = null;

/** @type {?Node} */
var currentParent = null;

/** @type {?Document} */
var doc = null;

/**
 * @param {!Array<Node>} focusPath The nodes to mark.
 * @param {boolean} focused Whether or not they are focused.
 */
var markFocused = function (focusPath, focused) {
  for (var i = 0; i < focusPath.length; i += 1) {
    getData(focusPath[i]).focused = focused;
  }
};

/**
 * Returns a patcher function that sets up and restores a patch context,
 * running the run function with the provided data.
 * @param {function((!Element|!DocumentFragment),!function(T),T=): ?Node} run
 * @return {function((!Element|!DocumentFragment),!function(T),T=): ?Node}
 * @template T
 */
var patchFactory = function (run) {
  /**
   * TODO(moz): These annotations won't be necessary once we switch to Closure
   * Compiler's new type inference. Remove these once the switch is done.
   *
   * @param {(!Element|!DocumentFragment)} node
   * @param {!function(T)} fn
   * @param {T=} data
   * @return {?Node} node
   * @template T
   */
  var f = function (node, fn, data) {
    var prevContext = context;
    var prevDoc = doc;
    var prevCurrentNode = currentNode;
    var prevCurrentParent = currentParent;
    var previousInAttributes = false;
    var previousInSkip = false;

    context = new Context();
    doc = node.ownerDocument;
    currentParent = node.parentNode;

    if (process.env.NODE_ENV !== 'production') {
      previousInAttributes = setInAttributes(false);
      previousInSkip = setInSkip(false);
    }

    var focusPath = getFocusedPath(node, currentParent);
    markFocused(focusPath, true);
    var retVal = run(node, fn, data);
    markFocused(focusPath, false);

    if (process.env.NODE_ENV !== 'production') {
      assertVirtualAttributesClosed();
      setInAttributes(previousInAttributes);
      setInSkip(previousInSkip);
    }

    context.notifyChanges();

    context = prevContext;
    doc = prevDoc;
    currentNode = prevCurrentNode;
    currentParent = prevCurrentParent;

    return retVal;
  };
  return f;
};

/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {!Element|!DocumentFragment} node The Element or Document
 *     to patch.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {!Node} The patched node.
 * @template T
 */
var patchInner = patchFactory(function (node, fn, data) {
  currentNode = node;

  enterNode();
  fn(data);
  exitNode();

  if (process.env.NODE_ENV !== 'production') {
    assertNoUnclosedTags(currentNode, node);
  }

  return node;
});

/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 * @param {!Element} node The Element where the patch should start.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM. This should have at most one top level
 *     element call.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {?Node} The node if it was updated, its replacedment or null if it
 *     was removed.
 * @template T
 */
var patchOuter = patchFactory(function (node, fn, data) {
  var startNode = /** @type {!Element} */{ nextSibling: node };
  var expectedNextNode = null;
  var expectedPrevNode = null;

  if (process.env.NODE_ENV !== 'production') {
    expectedNextNode = node.nextSibling;
    expectedPrevNode = node.previousSibling;
  }

  currentNode = startNode;
  fn(data);

  if (process.env.NODE_ENV !== 'production') {
    assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
  }

  if (node !== currentNode && node.parentNode) {
    removeChild(currentParent, node, getData(currentParent).keyMap);
  }

  return startNode === currentNode ? null : currentNode;
});

/**
 * Checks whether or not the current node matches the specified nodeName and
 * key.
 *
 * @param {!Node} matchNode A node to match the data to.
 * @param {?string} nodeName The nodeName for this node.
 * @param {?string=} key An optional key that identifies a node.
 * @return {boolean} True if the node matches, false otherwise.
 */
var matches = function (matchNode, nodeName, key) {
  var data = getData(matchNode);

  // Key check is done using double equals as we want to treat a null key the
  // same as undefined. This should be okay as the only values allowed are
  // strings, null and undefined so the == semantics are not too weird.
  return nodeName === data.nodeName && key == data.key;
};

/**
 * Aligns the virtual Element definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param {string} nodeName For an Element, this should be a valid tag string.
 *     For a Text, this should be #text.
 * @param {?string=} key The key used to identify this element.
 */
var alignWithDOM = function (nodeName, key) {
  if (currentNode && matches(currentNode, nodeName, key)) {
    return;
  }

  var parentData = getData(currentParent);
  var currentNodeData = currentNode && getData(currentNode);
  var keyMap = parentData.keyMap;
  var node = undefined;

  // Check to see if the node has moved within the parent.
  if (key) {
    var keyNode = keyMap[key];
    if (keyNode) {
      if (matches(keyNode, nodeName, key)) {
        node = keyNode;
      } else if (keyNode === currentNode) {
        context.markDeleted(keyNode);
      } else {
        removeChild(currentParent, keyNode, keyMap);
      }
    }
  }

  // Create the node if it doesn't exist.
  if (!node) {
    if (nodeName === '#text') {
      node = createText(doc);
    } else {
      node = createElement(doc, currentParent, nodeName, key);
    }

    if (key) {
      keyMap[key] = node;
    }

    context.markCreated(node);
  }

  // Re-order the node into the right position, preserving focus if either
  // node or currentNode are focused by making sure that they are not detached
  // from the DOM.
  if (getData(node).focused) {
    // Move everything else before the node.
    moveBefore(currentParent, node, currentNode);
  } else if (currentNodeData && currentNodeData.key && !currentNodeData.focused) {
    // Remove the currentNode, which can always be added back since we hold a
    // reference through the keyMap. This prevents a large number of moves when
    // a keyed item is removed or moved backwards in the DOM.
    currentParent.replaceChild(node, currentNode);
    parentData.keyMapValid = false;
  } else {
    currentParent.insertBefore(node, currentNode);
  }

  currentNode = node;
};

/**
 * @param {?Node} node
 * @param {?Node} child
 * @param {?Object<string, !Element>} keyMap
 */
var removeChild = function (node, child, keyMap) {
  node.removeChild(child);
  context.markDeleted( /** @type {!Node}*/child);

  var key = getData(child).key;
  if (key) {
    delete keyMap[key];
  }
};

/**
 * Clears out any unvisited Nodes, as the corresponding virtual element
 * functions were never called for them.
 */
var clearUnvisitedDOM = function () {
  var node = currentParent;
  var data = getData(node);
  var keyMap = data.keyMap;
  var keyMapValid = data.keyMapValid;
  var child = node.lastChild;
  var key = undefined;

  if (child === currentNode && keyMapValid) {
    return;
  }

  while (child !== currentNode) {
    removeChild(node, child, keyMap);
    child = node.lastChild;
  }

  // Clean the keyMap, removing any unusued keys.
  if (!keyMapValid) {
    for (key in keyMap) {
      child = keyMap[key];
      if (child.parentNode !== node) {
        context.markDeleted(child);
        delete keyMap[key];
      }
    }

    data.keyMapValid = true;
  }
};

/**
 * Changes to the first child of the current node.
 */
var enterNode = function () {
  currentParent = currentNode;
  currentNode = null;
};

/**
 * @return {?Node} The next Node to be patched.
 */
var getNextNode = function () {
  if (currentNode) {
    return currentNode.nextSibling;
  } else {
    return currentParent.firstChild;
  }
};

/**
 * Changes to the next sibling of the current node.
 */
var nextNode = function () {
  currentNode = getNextNode();
};

/**
 * Changes to the parent of the current node, removing any unvisited children.
 */
var exitNode = function () {
  clearUnvisitedDOM();

  currentNode = currentParent;
  currentParent = currentParent.parentNode;
};

/**
 * Makes sure that the current node is an Element with a matching tagName and
 * key.
 *
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @return {!Element} The corresponding Element.
 */
var coreElementOpen = function (tag, key) {
  nextNode();
  alignWithDOM(tag, key);
  enterNode();
  return (/** @type {!Element} */currentParent
  );
};

/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 *
 * @return {!Element} The corresponding Element.
 */
var coreElementClose = function () {
  if (process.env.NODE_ENV !== 'production') {
    setInSkip(false);
  }

  exitNode();
  return (/** @type {!Element} */currentNode
  );
};

/**
 * Makes sure the current node is a Text node and creates a Text node if it is
 * not.
 *
 * @return {!Text} The corresponding Text Node.
 */
var coreText = function () {
  nextNode();
  alignWithDOM('#text', null);
  return (/** @type {!Text} */currentNode
  );
};

/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInPatch('currentElement', context);
    assertNotInAttributes('currentElement');
  }
  return (/** @type {!Element} */currentParent
  );
};

/**
 * @return {Node} The Node that will be evaluated for the next instruction.
 */
var currentPointer = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInPatch('currentPointer', context);
    assertNotInAttributes('currentPointer');
  }
  return getNextNode();
};

/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
var skip = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertNoChildrenDeclaredYet('skip', currentNode);
    setInSkip(true);
  }
  currentNode = currentParent.lastChild;
};

/**
 * Skips the next Node to be patched, moving the pointer forward to the next
 * sibling of the current pointer.
 */
var skipNode = nextNode;

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var symbols = {
  default: '__default'
};

/**
 * @param {string} name
 * @return {string|undefined} The namespace to use for the attribute.
 */
var getNamespace = function (name) {
  if (name.lastIndexOf('xml:', 0) === 0) {
    return 'http://www.w3.org/XML/1998/namespace';
  }

  if (name.lastIndexOf('xlink:', 0) === 0) {
    return 'http://www.w3.org/1999/xlink';
  }
};

/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {?(boolean|number|string)=} value The attribute's value.
 */
var applyAttr = function (el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    var attrNS = getNamespace(name);
    if (attrNS) {
      el.setAttributeNS(attrNS, name, value);
    } else {
      el.setAttribute(name, value);
    }
  }
};

/**
 * Applies a property to a given Element.
 * @param {!Element} el
 * @param {string} name The property's name.
 * @param {*} value The property's value.
 */
var applyProp = function (el, name, value) {
  el[name] = value;
};

/**
 * Applies a value to a style declaration. Supports CSS custom properties by
 * setting properties containing a dash using CSSStyleDeclaration.setProperty.
 * @param {CSSStyleDeclaration} style
 * @param {!string} prop
 * @param {*} value
 */
var setStyleValue = function (style, prop, value) {
  if (prop.indexOf('-') >= 0) {
    style.setProperty(prop, /** @type {string} */value);
  } else {
    style[prop] = value;
  }
};

/**
 * Applies a style to an Element. No vendor prefix expansion is done for
 * property names/values.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} style The style to set. Either a string of css or an object
 *     containing property-value pairs.
 */
var applyStyle = function (el, name, style) {
  if (typeof style === 'string') {
    el.style.cssText = style;
  } else {
    el.style.cssText = '';
    var elStyle = el.style;
    var obj = /** @type {!Object<string,string>} */style;

    for (var prop in obj) {
      if (has(obj, prop)) {
        setStyleValue(elStyle, prop, obj[prop]);
      }
    }
  }
};

/**
 * Updates a single attribute on an Element.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
var applyAttributeTyped = function (el, name, value) {
  var type = typeof value;

  if (type === 'object' || type === 'function') {
    applyProp(el, name, value);
  } else {
    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
  }
};

/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function (el, name, value) {
  var data = getData(el);
  var attrs = data.attrs;

  if (attrs[name] === value) {
    return;
  }

  var mutator = attributes[name] || attributes[symbols.default];
  mutator(el, name, value);

  attrs[name] = value;
};

/**
 * A publicly mutable object to provide custom mutators for attributes.
 * @const {!Object<string, function(!Element, string, *)>}
 */
var attributes = createMap();

// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = applyAttributeTyped;

attributes['style'] = applyStyle;

/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;

/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {Array<*>}
 */
var argsBuilder = [];

/**
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementOpen = function (tag, key, statics, var_args) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementOpen');
    assertNotInSkip('elementOpen');
  }

  var node = coreElementOpen(tag, key);
  var data = getData(node);

  if (!data.staticsApplied) {
    if (statics) {
      for (var _i = 0; _i < statics.length; _i += 2) {
        var name = /** @type {string} */statics[_i];
        var value = statics[_i + 1];
        updateAttribute(node, name, value);
      }
    }
    // Down the road, we may want to keep track of the statics array to use it
    // as an additional signal about whether a node matches or not. For now,
    // just use a marker so that we do not reapply statics.
    data.staticsApplied = true;
  }

  /*
   * Checks to see if one or more attributes have changed for a given Element.
   * When no attributes have changed, this is much faster than checking each
   * individual argument. When attributes have changed, the overhead of this is
   * minimal.
   */
  var attrsArr = data.attrsArr;
  var newAttrs = data.newAttrs;
  var isNew = !attrsArr.length;
  var i = ATTRIBUTES_OFFSET;
  var j = 0;

  for (; i < arguments.length; i += 2, j += 2) {
    var _attr = arguments[i];
    if (isNew) {
      attrsArr[j] = _attr;
      newAttrs[_attr] = undefined;
    } else if (attrsArr[j] !== _attr) {
      break;
    }

    var value = arguments[i + 1];
    if (isNew || attrsArr[j + 1] !== value) {
      attrsArr[j + 1] = value;
      updateAttribute(node, _attr, value);
    }
  }

  if (i < arguments.length || j < attrsArr.length) {
    for (; i < arguments.length; i += 1, j += 1) {
      attrsArr[j] = arguments[i];
    }

    if (j < attrsArr.length) {
      attrsArr.length = j;
    }

    /*
     * Actually perform the attribute update.
     */
    for (i = 0; i < attrsArr.length; i += 2) {
      var name = /** @type {string} */attrsArr[i];
      var value = attrsArr[i + 1];
      newAttrs[name] = value;
    }

    for (var _attr2 in newAttrs) {
      updateAttribute(node, _attr2, newAttrs[_attr2]);
      newAttrs[_attr2] = undefined;
    }
  }

  return node;
};

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
var elementOpenStart = function (tag, key, statics) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementOpenStart');
    setInAttributes(true);
  }

  argsBuilder[0] = tag;
  argsBuilder[1] = key;
  argsBuilder[2] = statics;
};

/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
var attr = function (name, value) {
  if (process.env.NODE_ENV !== 'production') {
    assertInAttributes('attr');
  }

  argsBuilder.push(name);
  argsBuilder.push(value);
};

/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
var elementOpenEnd = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInAttributes('elementOpenEnd');
    setInAttributes(false);
  }

  var node = elementOpen.apply(null, argsBuilder);
  argsBuilder.length = 0;
  return node;
};

/**
 * Closes an open virtual Element.
 *
 * @param {string} tag The element's tag.
 * @return {!Element} The corresponding Element.
 */
var elementClose = function (tag) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementClose');
  }

  var node = coreElementClose();

  if (process.env.NODE_ENV !== 'production') {
    assertCloseMatchesOpenTag(getData(node).nodeName, tag);
  }

  return node;
};

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementVoid = function (tag, key, statics, var_args) {
  elementOpen.apply(null, arguments);
  return elementClose(tag);
};

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
var text = function (value, var_args) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('text');
    assertNotInSkip('text');
  }

  var node = coreText();
  var data = getData(node);

  if (data.text !== value) {
    data.text = /** @type {string} */value;

    var formatted = value;
    for (var i = 1; i < arguments.length; i += 1) {
      /*
       * Call the formatter function directly to prevent leaking arguments.
       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
       */
      var fn = arguments[i];
      formatted = fn(formatted);
    }

    node.data = formatted;
  }

  return node;
};

exports.patch = patchInner;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.currentElement = currentElement;
exports.currentPointer = currentPointer;
exports.skip = skip;
exports.skipNode = skipNode;
exports.elementVoid = elementVoid;
exports.elementOpenStart = elementOpenStart;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpen = elementOpen;
exports.elementClose = elementClose;
exports.text = text;
exports.attr = attr;
exports.symbols = symbols;
exports.attributes = attributes;
exports.applyAttr = applyAttr;
exports.applyProp = applyProp;
exports.notifications = notifications;
exports.importNode = importNode;


}).call(this,require('_process'))
},{"_process":4}],3:[function(require,module,exports){
"use strict";

var Shaco = require('shadow-component').default

module.exports = function jsxToShaco(jsxObject) {
  var key = jsxObject.attributes.key
  var state = jsxObject.attributes.state
  var options = Object.assign({}, jsxObject.attributes, {key: undefined, state: undefined})
  var children = (jsxObject.children || []).filter(function (child) {
    return child !== '' && child !== ' '
  })
  return function () {
    return Shaco.createElement(
      jsxObject.elementName,
      key,
      state,
      options,
      children
    )
  }
}

},{"shadow-component":9}],4:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],5:[function(require,module,exports){
'use strict';

module.exports = require('./source/index.js');

},{"./source/index.js":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shadowComponent = require('shadow-component');

var _shadowComponent2 = _interopRequireDefault(_shadowComponent);

var _history_manager = require('./history_manager');

var _history_manager2 = _interopRequireDefault(_history_manager);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var alreadyRender = false;

var RouterLink = _shadowComponent2.default.ComponentFactory({
  elementName: 'route-link',
  template: '\n    <content></content>\n  ',
  to: function to(e) {
    e.preventDefault();
    _history_manager2.default.push(this.state.to);
  },
  view: function view() {
    _shadowComponent2.default.createElement('a', null, null, {
      href: this.state.to,
      onclick: this.to.bind(this)
    }, this.state.child);
  }
});

var RouterSelector = _shadowComponent2.default.ComponentFactory({
  elementName: 'route-selector',
  template: '\n    <content></content>\n  ',
  state: {},
  renderComponent: function renderComponent() {
    this.parentElement.routeIs(this.state.pattern, this.state.params);
  },
  view: function view() {
    this.renderComponent();
  }
});

var RouterManager = _shadowComponent2.default.ComponentFactory({
  elementName: 'route-manager',
  template: '\n  <content></content>\n  ',
  onMount: function onMount() {
    this.watchRoute();
  },
  unMount: function unMount() {
    this.history();
    window.onpopstate = function () {};
  },

  routes: [],
  defaultRoute: {},
  watchRoute: function watchRoute() {
    var _this = this;

    this.routeVariable = {};
    window.onpopstate = function (event) {
      _this.render(true);
    };
    this.history = _history_manager2.default.subscribe(function (e) {
      _this.render(true);
    });
  },
  getComponentForRoute: function getComponentForRoute() {
    var selectedRoute = this.routes.filter(function (route) {
      return _history_manager2.default.match(route.pattern);
    });
    if (selectedRoute.length === 0) {
      selectedRoute = this.defaultRoute;
    } else {
      selectedRoute = selectedRoute[0];
    }
    return selectedRoute;
  },
  routeIs: function routeIs(pattern, paramsArray) {
    paramsArray = [].concat(_toConsumableArray(paramsArray.slice(0, 2)), [this.state], _toConsumableArray(paramsArray.slice(2)));
    if (pattern !== '*') {
      this.routes.push({ pattern: pattern, paramsArray: paramsArray });
    } else {
      Object.assign(this.defaultRoute, { pattern: pattern, paramsArray: paramsArray });
    }
  },
  renderRouteComponent: function renderRouteComponent() {
    var selectedRoute = this.getComponentForRoute();
    if (selectedRoute.hasOwnProperty('pattern')) {
      selectedRoute.paramsArray[2] = Object.assign(this.state, _history_manager2.default.processUrl(selectedRoute.pattern));
      _shadowComponent2.default.createElement.apply(_shadowComponent2.default, _toConsumableArray(selectedRoute.paramsArray));
    }
  },

  view: function view() {
    this.renderChildren();
    this.renderRouteComponent();
  }
});

exports.default = RouterManager;

},{"./history_manager":7,"shadow-component":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var historyManager = history;
var listeners = [];

// Private Functions
function ifNotEmpty(variable) {
  return typeof variable !== 'undefined' && variable !== null && variable !== '' && typeof variable === 'string';
}

function extractQuery(url) {
  return url.slice(1).split('&').reduce(function (result, query, index) {
    var _query$split = query.split('=');

    var _query$split2 = _slicedToArray(_query$split, 2);

    var variable = _query$split2[0];
    var value = _query$split2[1];

    if (ifNotEmpty(variable)) {
      result[variable] = value;
    }
    return result;
  }, {});
}

function extractVariables(url, pattern) {
  var regPattern = getPattern(pattern);
  var matchedUrl = url.match(regPattern) || [];
  var patternVariables = getVariables(pattern);

  return matchedUrl.slice(1).reduce(function (result, match, index) {
    result[patternVariables[index]] = match;
    return result;
  }, {});
}

function getPattern(patternString) {
  var pattern = patternString.replace(/\:[a-zA-z0-9]*/g, '([a-zA-Z0-9]*)') + '(?=\\?|$)';
  return new RegExp(pattern, 'i');
}

function getVariables(pattern) {
  var matches = pattern.match(/\:([a-zA-Z0-9]*)/g) || [];
  return matches.map(function (match) {
    return match.replace(/\:/, '');
  });
}

// Public Functions
function match(pattern) {
  var url = arguments.length <= 1 || arguments[1] === undefined ? window.location : arguments[1];

  var result = url.href.match(getPattern(pattern));
  return result !== null;
}

function processUrl(pattern) {
  var url = arguments.length <= 1 || arguments[1] === undefined ? window.location : arguments[1];

  return _extends({}, extractQuery(url.search), extractVariables(url.href, pattern));
}

function callListeners() {
  listeners.map(function (listener) {
    listener();
  });
}

function push(url) {
  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var title = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

  historyManager.pushState(state, title, url);
  callListeners();
}

function go() {
  var n = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];

  historyManager.go(n);
  callListeners();
}

function back() {
  historyManager.back();
  callListeners();
}

function forward() {
  historyManager.forward();
  callListeners();
}

function subscribe(listener) {
  listeners.push(listener);

  return function () {
    listeners = listeners.filter(function (f) {
      return f !== listener;
    });
  };
}

exports.default = {
  go: go,
  push: push,
  back: back,
  forward: forward,
  processUrl: processUrl,
  subscribe: subscribe,
  match: match
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistoryManager = exports.RouterManager = undefined;

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _history_manager = require('./history_manager');

var _history_manager2 = _interopRequireDefault(_history_manager);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.RouterManager = _component2.default;
exports.HistoryManager = _history_manager2.default;

},{"./component":6,"./history_manager":7}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"./source/index.js":13,"dup":5}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shadowdomShim = require('./shadowdom-shim');

var _shadowdomShim2 = _interopRequireDefault(_shadowdomShim);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DefaultCallbacks = {
  detachedCallback: function detachedCallback() {
    this.onUnMount();
  },
  attributeChangedCallback: function attributeChangedCallback() {
    console.log('Change attibute');
  },
  onMount: function onMount() {},
  onUnMount: function onUnMount() {},
  createdCallback: function createdCallback() {
    if (typeof this.createShadowRoot === 'function') {
      this.shadow = this.createShadowRoot();
      this.shadow.innerHTML = this.template;
    } else {
      _shadowdomShim2.default.writeStyle(this.template, this.nodeName);
    }
  }
};

function createDefaultCallbacks(callbacks) {
  return Object.assign({}, createObjDescriptor(DefaultCallbacks), createObjDescriptor(callbacks));
}

function createObjDescriptor(obj) {
  var objDescriptor = {};
  Object.keys(obj).forEach(function (prop) {
    objDescriptor[prop] = { value: obj[prop] };
  });
  return objDescriptor;
}

function SetListeners() {
  var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return {
    attachedCallback: function attachedCallback() {
      try {
        this.onMount();
        events.forEach(function (event) {
          this.addEventListener(event.type, function (e) {
            if (e.target && e.target.matches(event.selector)) {
              event.callback.bind(this)(e);
            }
          }.bind(this));
        }.bind(this));
      } catch (e) {
        console.log(e);
      }
    }
  };
}

function Builder(tagName, options) {
  var optionsDescriptor = Object.assign({}, createDefaultCallbacks(options), createObjDescriptor(SetListeners(options.events)));
  optionsDescriptor.state = Object.assign({}, optionsDescriptor.state, {
    enumerable: true,
    writable: true
  });
  var TagPrototype = Object.create(HTMLElement.prototype, optionsDescriptor);
  try {
    var tagNameElement = document.registerElement(tagName, {
      prototype: TagPrototype
    });
    return new tagNameElement();
  } catch (e) {
    console.log(e);
    return document.createElement(tagName);
  }
}

exports.default = Builder;

},{"./shadowdom-shim":14}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _builder = require('./builder');

var _builder2 = _interopRequireDefault(_builder);

var _exceptions = require('./exceptions');

var _exceptions2 = _interopRequireDefault(_exceptions);

var _incrementalDom = require('incremental-dom');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function validateRequiredFields(options) {
  if (!options.hasOwnProperty('template')) {
    throw _exceptions2.default.WITHOUT_TEMPLATE();
  }
  if (!options.hasOwnProperty('view')) {
    throw _exceptions2.default.WITHOUT_VIEW();
  }
  if (!options.hasOwnProperty('elementName')) {
    throw _exceptions2.default.WITHOUT_TAGNAME();
  }
  if (typeof options.view != "string" && typeof options.view != "function") {
    throw _exceptions2.default.VIEW_MUST_BE_STRING_OR_FUNTION();
  }
}

function renderFactory(view) {
  return {
    render: function render(reRender) {
      if (!reRender) {
        renderElement(view, this);
      } else {
        (0, _incrementalDom.patch)(this, function (scope) {
          renderElement(view, scope);
        }, this);
      }
    }
  };
}

function renderElement(view, scope) {
  var result = view.bind(scope)();
  if (typeof result === 'function') {
    result.bind(scope)();
  }
}

function setStateFactory() {
  return {
    setState: function setState(newState) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.state = Object.assign({}, this.state, newState);
      this.render(force);
      return this.state;
    }
  };
}

function renderChildFactory() {
  return {
    renderChildren: function renderChildren() {
      var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.child;

      if (typeof child === 'string') {
        (0, _incrementalDom.text)(child);
      } else if (typeof child === 'function') {
        child();
      } else if (Array.isArray(child)) {
        child.forEach(this.renderChildren);
      }
    }
  };
}

function TagFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // validate Presence of necesary API elements
  validateRequiredFields(options);
  var CloneOptions = Object.assign({}, { name: options.elementName });
  delete Object.elementName;
  Object.assign(options, renderFactory(options.view), setStateFactory(), renderChildFactory());
  return (0, _builder2.default)(CloneOptions.name, options);
}

exports.default = TagFactory;

},{"./builder":10,"./exceptions":12,"incremental-dom":2}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ComponentExceptions = {
  WITHOUT_TEMPLATE: function WITHOUT_TEMPLATE() {
    return new Error('ComponentWithOutTemplate, The new component need a Template');
  },
  WITHOUT_VIEW: function WITHOUT_VIEW() {
    return new Error('ComponentWithOutView, The new component must have a view rendering');
  },
  WITHOUT_TAGNAME: function WITHOUT_TAGNAME() {
    new Error('ComponentWithPutTagName, You can\'t create a component without the tagName, you must pass that to ComponentFactory');
  },
  VIEW_MUST_BE_STRING_OR_FUNTION: function VIEW_MUST_BE_STRING_OR_FUNTION() {
    new Error("ComponentViewMustBeAStringOrFunction The attribute view must be a string or a funtion.");
  }
};

exports.default = ComponentExceptions;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('document-register-element');

var _incrementalDom = require('incremental-dom');

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DefaultComponentObject = {
  state: {},
  template: '<content></content>'
};

function createElement(tagName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var child = arguments[4];

  (0, _incrementalDom.elementOpenStart)(tagName, key);
  Object.keys(options).forEach(function (option) {
    (0, _incrementalDom.attr)(option, options[option]);
  });
  var element = (0, _incrementalDom.elementOpenEnd)(tagName);

  if (typeof element.setState !== 'undefined') {
    element.setState(Object.assign({}, state, { child: child }));
  } else {
    renderChild(child);
  }
  (0, _incrementalDom.elementClose)(tagName);
  return element;
}

function renderChild(child) {
  if (typeof child === 'undefined') {
    return;
  }
  if (typeof child === 'string') {
    return (0, _incrementalDom.text)(child.trim());
  } else if (typeof child === 'function') {
    return child();
  } else if (Array.isArray(child)) {
    child.forEach(renderChild);
  } else {
    return child;
  }
}

function ComponentFactory() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  object = Object.assign({}, DefaultComponentObject, object);
  var tag = (0, _create2.default)(object);
  return tag;
}

function isNotChrome() {
  return navigator.userAgent.toLowerCase().indexOf('chrome') === -1;
}

function renderDOM(component, tag) {
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var tries = 1;
  var interval = void 0;
  if (!isNotChrome()) {
    renderComponent(component, tag, state);
  } else {
    interval = setInterval(function () {
      renderComponent(component, tag, state);
      tries += 1;
      if (tries > 5) {
        clearInterval(interval);
      }
    }, 10);
  }
}

function renderComponent(component, tag, state) {
  return (0, _incrementalDom.patch)(tag, function (data) {
    return Shaco.createElement(component, null, data);
  }, state);
}

var Shaco = {
  ComponentFactory: ComponentFactory,
  createElement: createElement,
  renderDOM: renderDOM,
  patch: _incrementalDom.patch
};

exports.default = Shaco;

},{"./create":11,"document-register-element":1,"incremental-dom":2}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function extractStyle(template, tagName) {
  tagName = tagName.toLowerCase();
  var newTemplate = template.replace(/\:\:content/mg, tagName).replace(/\:host\((.*)\)/mg, tagName + '.$1').replace(/\:host/mg, tagName);

  return extractTagContent(newTemplate, 'style');
}

function extractTagContent(template, tag) {
  var dummy = document.createElement('div');
  dummy.innerHTML = template;
  return dummy.querySelector(tag);
}

function removeStyle(template) {
  return template.replace(styleRegex, '');
}

function extractContent(template) {
  return extractTagContent(template, 'content');
}

function writeStyle() {
  var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var styleElement = extractStyle(template, tagName);
  if (styleElement) {
    document.head.appendChild(styleElement);
  }
  return styleElement;
}

exports.default = {
  writeStyle: writeStyle
};

},{}],15:[function(require,module,exports){
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":18,"./v4":19}],16:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],17:[function(require,module,exports){
(function (global){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],18:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/bytesToUuid":16,"./lib/rng":17}],19:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":16,"./lib/rng":17}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsxToShaco = require('jsx-to-shaco');

var _jsxToShaco2 = _interopRequireDefault(_jsxToShaco);

var _shadowComponent = require('shadow-component');

var _shadowComponent2 = _interopRequireDefault(_shadowComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterBy = _shadowComponent2.default.ComponentFactory({
  elementName: 'filter-by',
  template: '\n  <style>\n    :host {\n  display: table-cell;\n  width: 1%;\n  text-decoration: none;\n  background-color: #ecf0f1;\n  text-align: center;\n  pointer: cursor;\n  }\n    ::content a {\n  display: block;\n  padding: 0.8em 0.4em;\n  color: #333;\n  cursor: pointer;\n  }\n    ::content a.active {\n  background-color: #2980b9;\n  color: white;\n  }\n  </style>\n  <content></content>\n  ',
  view: function view() {
    return (0, _jsxToShaco2.default)({
      elementName: 'a',
      attributes: {
        class: this.state.visibilityFilter === this.state.type ? 'active' : '',
        onclick: this.state.filterHandler
      },
      children: [' ', this.state.text, ' ']
    });
  }
});

var FilterMenu = _shadowComponent2.default.ComponentFactory({
  elementName: 'filter-menu',
  template: '\n  <style>\n    ::content .table-justify {\n  display: table;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  }\n  </style>\n  <content></content>\n  ',
  filterPlusHandler: function filterPlusHandler(filter) {
    var _this = this;

    return Object.assign({}, filter, {
      visibilityFilter: this.state.visibilityFilter,
      filterHandler: function filterHandler() {
        _this.state.filterHandler(filter.type);
      }
    });
  },

  view: function view() {
    var _this2 = this;

    return (0, _jsxToShaco2.default)({
      elementName: 'div',
      attributes: {
        class: 'table-justify'
      },
      children: [' ', this.state.filters.map(function (filter, index) {
        return (0, _jsxToShaco2.default)({
          elementName: 'filter-by',
          attributes: {
            state: _this2.filterPlusHandler(filter)
          },
          children: []
        });
      }), ' ']
    });
  }
});

exports.default = FilterMenu;

},{"jsx-to-shaco":3,"shadow-component":9}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = visibilityFilter;
exports.filterTodos = filterTodos;
function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SHOW_ALL";
  var action = arguments[1];

  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

function filterTodos(todos, filter) {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(function (todo) {
        return todo.completed;
      });
    case "SHOW_ACTIVE":
      return todos.filter(function (todo) {
        return !todo.completed;
      });
    default:
      return todos;
  }
}

var filters = exports.filters = [{
  type: "SHOW_ALL",
  text: "All tasks"
}, {
  type: "SHOW_ACTIVE",
  text: "Active task"
}, {
  type: "SHOW_COMPLETED",
  text: "Completed task"
}];

},{}],22:[function(require,module,exports){
'use strict';

var _shadowComponent = require('shadow-component');

var _shadowComponent2 = _interopRequireDefault(_shadowComponent);

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _reducer = require('../filter_visibility/reducer');

var _list = require('../todos/list.view');

var _list2 = _interopRequireDefault(_list);

var _form = require('../todos/form.view');

var _form2 = _interopRequireDefault(_form);

var _filter = require('../filter_visibility/filter.view');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoApp = _shadowComponent2.default.ComponentFactory({
  elementName: 'todo-app',
  state: _store2.default.getState(),
  template: '\n  <style>\n    :host {\n  font-family: Helvetica;\n  max-width: 500px;\n  margin: 0 auto;\n  display: block;\n  }\n  </style>\n  <content></content>',
  statePlusHandlers: function statePlusHandlers() {
    return Object.assign({}, this.state, {
      toggleHandler: function toggleHandler(index) {
        _store2.default.dispatch({ type: "TOGGLE_TODO", index: index });
      },
      removeHandler: function removeHandler(index) {
        _store2.default.dispatch({ type: "REMOVE_TODO", index: index });
      }
    });
  },
  submitHandlerFactory: function submitHandlerFactory() {
    return {
      submitHandler: function submitHandler(value) {
        _store2.default.dispatch({ type: "ADD_TODO", text: value });
      }
    };
  },
  filterMenuState: function filterMenuState() {
    return {
      visibilityFilter: this.state.visibilityFilter,
      filterHandler: function filterHandler(filter) {
        _store2.default.dispatch({ type: "SET_VISIBILITY_FILTER", filter: filter });
      },

      filters: _reducer.filters
    };
  },

  view: function view() {
    _shadowComponent2.default.createElement('todo-form', null, this.submitHandlerFactory());
    _shadowComponent2.default.createElement('todo-list', null, this.statePlusHandlers());
    _shadowComponent2.default.createElement('filter-menu', null, this.filterMenuState());
  }
});

},{"../../store":29,"../filter_visibility/filter.view":20,"../filter_visibility/reducer":21,"../todos/form.view":23,"../todos/list.view":24,"shadow-component":9}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shadowComponent = require('shadow-component');

var _shadowComponent2 = _interopRequireDefault(_shadowComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoForm = _shadowComponent2.default.ComponentFactory({
  elementName: 'todo-form',
  state: {
    text: '',
    submitHandler: function submitHandler() {},
    errors: []
  },
  template: '\n  <style>\n    :host {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 0em 0;\n    box-shadow: 0 0 2px 0 rgba(0,0,0,0.5);\n    z-index: 100;\n    background-color: white;\n  }\n\n    ::content form {\n    max-width: 500px;\n    margin: 0 auto;\n  }\n  ::content form:before,\n  ::content form:after {\n  display: block;\n  content: "";\n  clear: both;\n  }\n\n  ::content input,\n  ::content button {\n  display: block;\n  padding: 1em;\n  border: none;\n  background: none;\n  float: left;\n  font-size: 1.1em;\n  box-sizing: border-box;\n  }\n\n  ::content input {\n  background-color: white;\n  box-shadow: 0 0 1px 0 #777;\n  width: 70%;\n  }\n\n  ::content button {\n  width: 30%;\n  float: right;\n  background-color: #1cc9a8;\n  color: white;\n  padding: 1em 0.2em;\n  box-shadow: 0 0 1px 0 #16a085;\n  }\n\n    ::content .error {\n  max-width: 500px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0.8em 0.5em;\n  font-size: 0.9em;\n  color: red;\n  }\n  </style>\n  <content></content>\n  ',
  submitHandler: function submitHandler(e) {
    e.preventDefault();
    if (e.target[0].value !== '') {
      this.state.submitHandler(e.target[0].value);
      // Remove errors and render again
      this.setState(_extends({}, this.state, {
        errors: []
      }), true); // this true to patch the component
    } else {
      this.setState(_extends({}, this.state, {
        errors: ['You must write a Task']
      }), true); // for patch the element
    }
    e.target[0].value = '';
  },

  view: function view() {
    // Using just Shaco.createElement
    _shadowComponent2.default.createElement('form', null, null, {
      onsubmit: this.submitHandler.bind(this)
    }, function () {
      _shadowComponent2.default.createElement('input', null, null, {
        type: 'text',
        placeholder: 'What you have to do?'
      }), _shadowComponent2.default.createElement('button', null, null, {
        type: 'submit'
      }, 'Add todo');
    });
    if (this.state.errors.length > 0) {
      this.state.errors.map(function (error, index) {
        _shadowComponent2.default.createElement('div', index, {}, { class: 'error' }, '' + error);
      });
    }
  }
});

exports.default = TodoForm;

},{"shadow-component":9}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxToShaco = require('jsx-to-shaco');

var _jsxToShaco2 = _interopRequireDefault(_jsxToShaco);

var _shadowComponent = require('shadow-component');

var _shadowComponent2 = _interopRequireDefault(_shadowComponent);

var _reducer = require('../filter_visibility/reducer');

var _show = require('./show.view');

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTodosState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

var TodoList = _shadowComponent2.default.ComponentFactory({
  elementName: 'todo-list',
  state: defaultTodosState,
  template: '\n  <style>\n    :host {\n    display: block;\n  padding-top: 3em;\n  padding-bottom: 3em;\n  }\n    ::content ul {\n  list-style: none;\n  margin: 1em 0;\n  padding: 0;\n  }\n\n    ::content li:first-child {\n  border-top: none;\n  }\n\n    ::content li:last-child {\n  border-bottom: none;\n  }\n  h2 {\n  padding: 0.1em 0;\n  margin: 0.5em 0;\n  }\n  </style>\n  <h2>My todo list</h2>\n  <content></content>\n  ',
  todoPlushandlers: function todoPlushandlers(todo) {
    return _extends({}, todo, {
      toggleHandler: this.state.toggleHandler,
      removeHandler: this.state.removeHandler
    });
  },

  view: function view() {
    var _this = this;

    var _state = this.state,
        todos = _state.todos,
        visibilityFilter = _state.visibilityFilter;

    var visibleTodos = (0, _reducer.filterTodos)(todos, visibilityFilter);
    return (0, _jsxToShaco2.default)({
      elementName: 'ul',
      attributes: {},
      children: [' ', visibleTodos.map(function (todo, index) {
        return (0, _jsxToShaco2.default)({
          elementName: 'todo-item',
          attributes: {
            key: index,
            state: _this.todoPlushandlers(todo)
          },
          children: []
        });
      }), ' ']
    });
  }
});

exports.default = TodoList;

},{"../filter_visibility/reducer":21,"./show.view":26,"jsx-to-shaco":3,"shadow-component":9}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uuid = require('uuid');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function defaultTodoObj() {
  return { completed: false };
}

function addTodo(state, action) {
  return [].concat(_toConsumableArray(state), [newTodo({ id: (0, _uuid.v4)(), text: action.text })]);
}

function newTodo(todo) {
  return _extends({}, defaultTodoObj(), todo);
}

function removeTodo(state, id) {
  return state.filter(function (todo) {
    return todo.id !== id;
  });
}

function toggleTodo(state, id) {
  var index = state.findIndex(function (todo) {
    return todo.id === id;
  });
  return [].concat(_toConsumableArray(state.slice(0, index)), [changeStatus(state[index])], _toConsumableArray(state.slice(index + 1)));
}

function changeStatus(todo) {
  return _extends({}, todo, {
    completed: !todo.completed
  });
}

function saveToLocalStorage(state) {
  window.localStorage.setItem('todos', JSON.stringify(state));
  return state;
}

function readLocalStorage() {
  return JSON.parse(window.localStorage.getItem('todos') || '[]');
}

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : readLocalStorage();
  var action = arguments[1];

  switch (action.type) {
    case "ADD_TODO":
      return saveToLocalStorage(addTodo(state, action));
    case "REMOVE_TODO":
      return saveToLocalStorage(removeTodo(state, action.index));
    case "TOGGLE_TODO":
      return saveToLocalStorage(toggleTodo(state, action.index));
    default:
      return state;
  }
}

exports.default = todos;

},{"uuid":15}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsxToShaco = require('jsx-to-shaco');

var _jsxToShaco2 = _interopRequireDefault(_jsxToShaco);

var _shadowComponent = require('shadow-component');

var _shadowComponent2 = _interopRequireDefault(_shadowComponent);

var _shacoRouter = require('shaco-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTodoState = {
  text: '',
  completed: false,
  clickHandler: function clickHandler() {},
  removeHandler: function removeHandler() {}
};

var Todo = _shadowComponent2.default.ComponentFactory({
  elementName: 'todo-item',
  state: defaultTodoState,
  template: '\n  <style>\n    ::content li .content,\n      ::content li .todo-remove {\n  float: left;\n  display: block;\n  }\n\n    ::content li .content {\n  width: 92%;\n  }\n\n    ::content li .todo-remove {\n  background: none;\n  color: #e74c3c;\n  border: none;\n  box-shadow: none;\n  font-size: 2.2em;\n  margin-top: -0.5em;\n  line-height: 0.8em;\n  width: 8%;\n  float: right;\n  position: relative;\n  top: 0.2em;\n  }\n\n    ::content .ready {\n  color: #999;\n  position: relative;\n  }\n\n    ::content .ready:before {\n  position: absolute;\n  top: 48%;\n  left: %5;\n  width: 80%;\n  display: block;\n  border-bottom: 1px solid #999;\n  content: "";\n  }\n\n    ::content .not-ready {\n  text-decoration: none;\n  }\n\n    ::content li {\n  background-color: #F3F3F3;\n  padding: 1em;\n  border-bottom: 1px solid #CCC;\n  border-top: 1px solid #FFF;\n  position: relative;\n  }\n    ::content li:before,\n      ::content li:after {\n  content: "";\n  display: block;\n  clear: both;\n  }\n  </style>\n  <div class="todo-item">\n  <content></content>\n  </div>\n  ',
  view: function view() {
    var _this = this;

    var _state = this.state,
        id = _state.id,
        text = _state.text,
        toggleHandler = _state.toggleHandler,
        removeHandler = _state.removeHandler,
        completed = _state.completed,
        child = _state.child;

    return (0, _jsxToShaco2.default)({
      elementName: 'li',
      attributes: {
        class: completed ? 'ready' : 'not-ready'
      },
      children: [' ', (0, _jsxToShaco2.default)({
        elementName: 'span',
        attributes: {
          class: 'content',
          onclick: function onclick() {
            toggleHandler(_this.state.id);
          }
        },
        children: [' ', text, ' ', (0, _jsxToShaco2.default)({
          elementName: 'route-link',
          attributes: {
            state: { to: '/task/' + this.state.id }
          },
          children: [' (link) ']
        }), ' ']
      }), ' ', (0, _jsxToShaco2.default)({
        elementName: 'button',
        attributes: {
          class: 'todo-remove',
          onclick: function onclick() {
            removeHandler(_this.state.id);
          }
        },
        children: [' ', '\u2612', ' ']
      }), ' ']
    });
  }
});

exports.default = Todo;

},{"jsx-to-shaco":3,"shaco-router":5,"shadow-component":9}],27:[function(require,module,exports){
'use strict';

var _jsxToShaco = require('jsx-to-shaco');

var _jsxToShaco2 = _interopRequireDefault(_jsxToShaco);

var _shadowComponent = require('shadow-component');

var _shadowComponent2 = _interopRequireDefault(_shadowComponent);

var _shacoRouter = require('shaco-router');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _view = require('./components/main/view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoContainer = _shadowComponent2.default.ComponentFactory({
  elementName: 'todo-container',
  state: _store2.default.getState(),
  template: '\n  <style>\n    :host {\n  font-family: Helvetica;\n  max-width: 500px;\n  margin: 0 auto;\n  display: block;\n  }\n  </style>\n  <content></content>',
  view: function view() {
    /*
     * RouteManager: will allow render one component depending the URL in the browser.
     *
     * the routeIs function receive to params:
     * Fist the pattern to match the URL:
     *    This could be something like:
     *    "/" -> the index
     *    "/tasks"
     *    "/tasks/:id"
     *    ".*" -> the rest
     * The second parameter is and array that will be past to Shaco.createElement. You don't add the state here
     * The State will be passed to all the components inside the router-manager
     * You can use router-manager using JSX like before or using javascript functions, like this:
     *
     *
      Shaco.createElement('route-manager', null, this.state, {}, () => {
        Shaco.createElement('route-selector', null, { pattern: '/', params: ['todo-app', null]} )
        Shaco.createElement('route-selector', null, { pattern: '.*', params: ['div', null, {}, "Not found"]} )
      })
      */

    return (0, _jsxToShaco2.default)({
      elementName: 'route-manager',
      attributes: {
        state: this.state
      },
      children: [' ', (0, _jsxToShaco2.default)({
        elementName: 'route-selector',
        attributes: {
          state: { pattern: '/', params: ['todo-app', null] }
        },
        children: []
      }), ' ', (0, _jsxToShaco2.default)({
        elementName: 'route-selector',
        attributes: {
          state: { pattern: '.*', params: ['div', null, {}, "Not found"] }
        },
        children: []
      }), ' ']
    });
  }
});

var render = function render() {
  _shadowComponent2.default.renderDOM('todo-container', document.getElementById('TodoApp'), _store2.default.getState());
};

render();

_store2.default.subscribe(render);

function init() {
  console.log('Start');
}

window.addEventListener ? addEventListener("load", init, false) : window.attachEvent ? attachEvent("onload", init) : onload = init;

},{"./components/main/view":22,"./store":29,"jsx-to-shaco":3,"shaco-router":5,"shadow-component":9}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return Object.keys(reducers).reduce(function (reducerAcumulator, key) {
      reducerAcumulator[key] = reducers[key](state[key], action);
      return reducerAcumulator;
    }, {});
  };
}

function chainCompose(functionsArray) {
  return function () {
    var functionsToCompose = functionsArray.slice(0, -1);
    var initialFunc = functionsArray.slice(-1)[0];
    return functionsToCompose.reduceRight(function (result, func) {
      return func(result);
    }, initialFunc.apply(undefined, arguments));
  };
}

function interceptStoreWith(interceptors) {
  if (!Array.isArray(interceptors)) {
    interceptors = arguments;
  }
  return function (store) {
    var _dispatch = store.dispatch;

    // Using the scope to past throw every interceptor function the scoped dispatch function
    var interceptorStoreAPI = {
      dispatch: function dispatch(action) {
        return _dispatch(action);
      },

      getState: store.getState
    };
    var interceptorsChain = interceptors.map(function (interceptor) {
      // This pass the first store to all the interceptos
      return interceptor(interceptorStoreAPI);
    });

    // This change the dispatch function inside the actual scope. Therefore
    // The inner function inside every interceptor will execute the complete interceptor stack
    //
    // The chaincompose take every function returned for every interceptor when pass the store
    // And create a chain like this: interceptor2(interceptor1(interceptor0(store.dispatch)))
    // And assign this new function chain to dispatch. the chain will return a function that receive
    // an action like dispatch inside store.
    _dispatch = chainCompose(interceptorsChain)(store.dispatch);

    return _extends({}, store, {
      dispatch: _dispatch
    });
  };
}

function createStore(reducer) {
  var state = void 0;
  var isBusy = false;
  var listeners = [];

  var dispatch = function dispatch(action) {
    mustNotBeTypeOf(action.type, 'undefined', 'Every action must have a type property');
    if (isBusy) {
      throw new Error('Reducer is busy');
    }
    try {
      isBusy = true;
      state = reducer(state, action);
    } finally {
      isBusy = false;
    }

    listeners.forEach(function (listener) {
      listener();
    });

    return action;
  };

  var subscribe = function subscribe(listener) {
    mustBeTypeOf(listener, 'function', 'Listener must be a function');
    listeners.push(listener);
    return function () {
      listeners = listeners.filter(function (f) {
        f !== filter;
      });
    };
  };

  var getState = function getState() {
    return state;
  };

  var replaceReducer = function replaceReducer(newReducer) {
    mustBeTypeOf(newReducer, 'function', 'Reducer must be a function');
    reducer = newReducer;
  };

  dispatch({ type: 'INIT' });

  return {
    dispatch: dispatch,
    getState: getState,
    replaceReducer: replaceReducer,
    subscribe: subscribe
  };
}

function mustBeTypeOf(obj, mustBe, message) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== mustBe) {
    throw new Error(message);
  }
}

function mustNotBeTypeOf(obj, mustBe, message) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === mustBe) {
    throw new Error(message);
  }
}

exports.combineReducers = combineReducers;
exports.createStore = createStore;
exports.interceptStoreWith = interceptStoreWith;

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state_manager = require('./state_manager');

var _reducer = require('./components/todos/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./components/filter_visibility/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let { combineReducers, createStore, interceptStoreWith } = StateManager

var reducer = (0, _state_manager.combineReducers)({
  todos: _reducer2.default,
  visibilityFilter: _reducer4.default
});

var logInterceptor = function logInterceptor(store) {
  return function (dispatchDown) {
    return function (action) {
      console.info('dispatching action:');
      console.log(action);
      console.info('the state is:');
      console.log(store.getState());
      var nextAction = dispatchDown(action);
      console.info('new state is:');
      console.log(store.getState());

      return nextAction;
    };
  };
};

var PromiseInterceptor = function PromiseInterceptor(store) {
  return function (dispatchDown) {
    return function (action) {
      if (typeof action.then !== 'function') {
        return dispatchDown(action);
      }

      // Implement the PromiseInterceptor, when the action is a Promise do something
    };
  };
};

var store = (0, _state_manager.interceptStoreWith)([logInterceptor, PromiseInterceptor])((0, _state_manager.createStore)(reducer));

exports.default = store;

},{"./components/filter_visibility/reducer":21,"./components/todos/reducer":25,"./state_manager":28}]},{},[27]);
