function DOMNodeCollection(html) {
  this.html = html;
}

DOMNodeCollection.prototype.html = function (string) {
  if (!string) {
    return this[0].innerHTML;
  }
  this.forEach( el => {
    el.innerHTML = string;
  });
};
DOMNodeCollection.prototype.empty = function () {
  this.forEach( el => {
    el.innerHTML = '';
  });
};

DOMNodeCollection.prototype.append = function(children) {
  if (this.html.length === 0) return;
  if (typeof children === 'object' && !(children instanceof DomNodeCollection)) {      
    children = $l(children);
  }
  if (typeof children === "string") {
    this.each((item) => {
      item.innerHTML += children;
    });
  } else if (children instanceof DomNodeCollection) {      
    this.each((item) => {
      children.each((childNode) => {
        item.appendChild(childNode.cloneNode(true));
      });
    });
  }
};

DOMNodeCollection.prototype.attr = function (item) {
  this.forEach( el => {
    el.innerHTML.push(item.outerHTML);
  });
};
DOMNodeCollection.prototype.addClass = function (item) {
  this.forEach( el => {
    el.innerHTML.push(item.outerHTML);
  });
};
DOMNodeCollection.prototype.removeClass = function (item) {
  this.forEach( el => {
    el.innerHTML.push(item.outerHTML);
  });
};

module.exports = DOMNodeCollection;