(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => i });
        var o = t(537),
          r = t.n(o),
          a = t(645),
          c = t.n(a)()(r());
        c.push([
          e.id,
          "html{\n    height: 100%;\n}\n\nbody{\n    display: grid;\n    grid-template-rows: 60px 1fr;\n    margin: 0;\n    height: 100%;\n}\n\n#header{\n    background-color: #0c4a6e;\n    color: #f0f9ff;\n    font-size: 40px;\n    font-weight: 400;\n    display: flex;\n    align-items: center;\n    padding-left: 75px;\n\n}\n#content{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n}\n\n#menu{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: #e5e7eb;\n    color: #111827;\n    padding-top: 30px;\n    padding-left: 10px;\n}\n\n#projectButton, #todoButton {\n    background-color: #475569;\n    color: #e5e7eb;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    align-self: center;\n    justify-self: center;\n    font-size: 30px;\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n#menuProjectTitle{\n    display: flex;\n    font-weight: 500;\n    font-size: 20px;\n}\n\n.project{\n    display: grid;\n    grid-template-columns: 1fr 5fr 2fr;\n    gap: 5px;\n    align-items: center;\n}\n\n.taskCount{\n    background-color: #475569;\n    color: #e5e7eb;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.trash{\n    background-color: #475569;\n    color: #e5e7eb;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n\n#display{\n    display: grid;\n    gap: 5px;\n    grid-auto-rows: 70px;\n}\n\n#projectTitle{\n    display: flex;\n    justify-content: center;\n    font-size: 20px;\n    align-items: center;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: 1fr 6fr 4fr 4fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    border: 1px solid grey;\n    border-radius: 2px;\n    padding: 5px;\n    align-items: center;\n}\n.notes{\n    grid-row: 2/3;\n    grid-column: 2/5;\n}\n\n.activeToDo{\n    background-color: #94a3b8\n}\n\n.activeToDo\n.trash{\n    grid-row: 1/3;\n    grid-column: 4/5;\n}\n\n.doneTask{\n    color: #94a3b8;\n    text-decoration: line-through;\n}\n\n.form{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n}\n\nfieldset{\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    border: none;\n}\n\n#name{\n    width: 100%;\n}\n\n.toDoForm\n#name, #date, #notes{\n    width: 33%;\n\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;;AAEtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,2BAA2B;IAC3B,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI;AACJ;;AAEA;;IAEI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,UAAU;;AAEd",
            sourcesContent: [
              "html{\n    height: 100%;\n}\n\nbody{\n    display: grid;\n    grid-template-rows: 60px 1fr;\n    margin: 0;\n    height: 100%;\n}\n\n#header{\n    background-color: #0c4a6e;\n    color: #f0f9ff;\n    font-size: 40px;\n    font-weight: 400;\n    display: flex;\n    align-items: center;\n    padding-left: 75px;\n\n}\n#content{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n}\n\n#menu{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: #e5e7eb;\n    color: #111827;\n    padding-top: 30px;\n    padding-left: 10px;\n}\n\n#projectButton, #todoButton {\n    background-color: #475569;\n    color: #e5e7eb;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    align-self: center;\n    justify-self: center;\n    font-size: 30px;\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n}\n\n#menuProjectTitle{\n    display: flex;\n    font-weight: 500;\n    font-size: 20px;\n}\n\n.project{\n    display: grid;\n    grid-template-columns: 1fr 5fr 2fr;\n    gap: 5px;\n    align-items: center;\n}\n\n.taskCount{\n    background-color: #475569;\n    color: #e5e7eb;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.trash{\n    background-color: #475569;\n    color: #e5e7eb;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n\n#display{\n    display: grid;\n    gap: 5px;\n    grid-auto-rows: 70px;\n}\n\n#projectTitle{\n    display: flex;\n    justify-content: center;\n    font-size: 20px;\n    align-items: center;\n}\n\n.todo{\n    display: grid;\n    grid-template-columns: 1fr 6fr 4fr 4fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 15px;\n    border: 1px solid grey;\n    border-radius: 2px;\n    padding: 5px;\n    align-items: center;\n}\n.notes{\n    grid-row: 2/3;\n    grid-column: 2/5;\n}\n\n.activeToDo{\n    background-color: #94a3b8\n}\n\n.activeToDo\n.trash{\n    grid-row: 1/3;\n    grid-column: 4/5;\n}\n\n.doneTask{\n    color: #94a3b8;\n    text-decoration: line-through;\n}\n\n.form{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n}\n\nfieldset{\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    border: none;\n}\n\n#name{\n    width: 100%;\n}\n\n.toDoForm\n#name, #date, #notes{\n    width: 33%;\n\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const i = c;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  o = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  o && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, o, r, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var l = this[i][0];
                  null != l && (c[l] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var d = [].concat(e[s]);
                (o && c[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  r &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = r))
                      : (d[4] = "".concat(r))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o
                ),
              a = "/*# ".concat(r, " */"),
              c = t.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(t.sourceRoot || "")
                  .concat(e, " */");
              });
            return [n].concat(c).concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, o = 0; o < n.length; o++)
            if (n[o].identifier === e) {
              t = o;
              break;
            }
          return t;
        }
        function o(e, o) {
          for (var a = {}, c = [], i = 0; i < e.length; i++) {
            var l = e[i],
              s = o.base ? l[0] + o.base : l[0],
              d = a[s] || 0,
              A = "".concat(s, " ").concat(d);
            a[s] = d + 1;
            var p = t(A),
              u = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(u);
            else {
              var m = r(u, o);
              (o.byIndex = i),
                n.splice(i, 0, { identifier: A, updater: m, references: 1 });
            }
            c.push(A);
          }
          return c;
        }
        function r(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var i = t(a[c]);
              n[i].references--;
            }
            for (var l = o(e, r), s = 0; s < a.length; s++) {
              var d = t(a[s]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = l;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var o = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(o, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var a = (n[o] = { id: o, exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var o in n)
        t.o(n, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0);
  var o = {};
  (() => {
    t.d(o, { s: () => L, U: () => w });
    class e {
      constructor(e, n = []) {
        (this.name = e), (this.toDoList = n);
      }
      addToDo(e) {
        this.toDoList.push(e),
          localStorage.clear(),
          localStorage.setItem("Umbrella", JSON.stringify(w));
      }
    }
    class n {
      constructor(e, n = []) {
        (this.projectList = n), (this.general = e), (this.active = e);
      }
      addProject(e) {
        this.projectList.push(e),
          localStorage.clear(),
          localStorage.setItem("Umbrella", JSON.stringify(w));
      }
      activate(e) {
        this.active = e;
      }
      get displayedProject() {
        return this.active;
      }
    }
    class r {
      constructor(e, n = "No Date Set", t = "", o = !1) {
        (this.name = e), (this.date = n), (this.notes = t), (this.complete = o);
      }
    }
    const a = (e) => {
        const n = document.createElement("div");
        n.className = "project";
        const t = document.createElement("div");
        (t.textContent = e.toDoList.length.toString()),
          (t.className = "taskCount"),
          n.appendChild(t);
        const o = document.createElement("div");
        return (
          (o.textContent = e.name),
          n.appendChild(o),
          n.addEventListener("click", () => {
            (-1 == w.projectList.indexOf(e) && e != w.general) ||
              (w.activate(e), L.repopulateDisplay());
          }),
          n
        );
      },
      c = (e) => {
        if (!e.contains(e.querySelector(".trash"))) {
          const n = document.createElement("button");
          (n.textContent = "X"),
            (n.className = "trash"),
            (n.onclick = () => {
              w.activate(w.general),
                w.projectList.splice(e.id, 1),
                L.repopulateDisplay(),
                L.repopulateMenu(),
                localStorage.clear(),
                localStorage.setItem("Umbrella", JSON.stringify(w));
            }),
            e.appendChild(n);
        }
      },
      i = (e) => {
        e.removeChild(e.querySelector(".trash"));
      },
      l = (e, n) => {
        const t = document.createElement("div");
        (t.className = "todo"),
          t.addEventListener("mouseenter", () => {
            s(t);
          }),
          t.addEventListener("mouseleave", () => {
            d(t);
          }),
          t.setAttribute("id", n.toString());
        const o = document.createElement("input");
        o.setAttribute("type", "checkbox"),
          1 == e.complete && ((o.checked = !0), t.classList.add("doneTask")),
          o.addEventListener("click", () => {
            1 == o.checked
              ? ((e.complete = !0),
                console.log(e.complete),
                t.classList.add("doneTask"))
              : ((e.complete = !1),
                console.log(e.complete),
                t.classList.remove("doneTask")),
              localStorage.clear(),
              localStorage.setItem("Umbrella", JSON.stringify(w));
          }),
          t.appendChild(o);
        const r = document.createElement("div");
        (r.textContent = e.name), t.appendChild(r);
        const a = document.createElement("div");
        if (((a.textContent = e.date), t.appendChild(a), e.notes)) {
          const n = document.createElement("div");
          (n.className = "notes"), (n.textContent = e.notes), t.appendChild(n);
        }
        return t;
      },
      s = (e) => {
        if (
          (e.classList.add("activeToDo"),
          !e.contains(e.querySelector(".trash")))
        ) {
          const n = document.createElement("button");
          (n.className = "trash"),
            (n.textContent = "X"),
            (n.onclick = () => {
              w.active.toDoList.splice(e.id, 1),
                L.repopulateDisplay(),
                L.repopulateMenu(),
                localStorage.clear(),
                localStorage.setItem("Umbrella", JSON.stringify(w));
            }),
            e.appendChild(n);
        }
      },
      d = (e) => {
        e.removeChild(e.querySelector(".trash")),
          e.classList.remove("activeToDo");
      },
      A = (e) => {
        let n = [];
        for (let t = 0; t < e.toDoList.length; t++)
          if (e.toDoList[t].date) {
            let o = new r(
              e.toDoList[t].name,
              e.toDoList[t].date,
              e.toDoList[t].notes,
              e.toDoList[t].complete
            );
            n.push(o);
          } else {
            let o = new r(e.toDoList[t].name, "", e.toDoList[t].complete);
            n.push(o);
          }
        return n;
      };
    var p = t(379),
      u = t.n(p),
      m = t(795),
      f = t.n(m),
      C = t(569),
      g = t.n(C),
      h = t(565),
      B = t.n(h),
      I = t(216),
      y = t.n(I),
      v = t(589),
      b = t.n(v),
      x = t(426),
      E = {};
    (E.styleTagTransform = b()),
      (E.setAttributes = B()),
      (E.insert = g().bind(null, "head")),
      (E.domAPI = f()),
      (E.insertStyleElement = y()),
      u()(x.Z, E),
      x.Z && x.Z.locals && x.Z.locals;
    const j = document.querySelector("#content").querySelector("#menu"),
      k = document.querySelector("#display");
    if (localStorage.getItem("Umbrella"))
      w = ((t) => {
        const o = new e(t.general.name, A(t.general));
        let r = [];
        for (let n = 0; n < t.projectList.length; n++) {
          let o = A(t.projectList[n]),
            a = new e(t.projectList[n].name, o);
          r.push(a), console.log(r);
        }
        return new n(o, r);
      })((w = JSON.parse(localStorage.getItem("Umbrella"))));
    else
      var S = new e("General"),
        w = new n(S);
    const L = {
        createProjectForm: () => {
          j.removeChild(document.querySelector("#projectButton"));
          const n = (() => {
            const n = document.createElement("div");
            n.className = "form";
            const t = document.createElement("fieldset");
            n.appendChild(t);
            const o = document.createElement("input");
            o.setAttribute("placeholder", "Project Name:"),
              (o.id = "name"),
              t.appendChild(o);
            const r = document.createElement("button");
            (r.textContent = "Submit"),
              (r.onclick = () => {
                const n = new e(document.querySelector("#name").value);
                w.addProject(n), L.repopulateMenu();
              });
            const a = document.createElement("button");
            return (
              (a.textContent = "Cancel"),
              (a.onclick = () => {
                L.repopulateMenu();
              }),
              n.appendChild(r),
              n.appendChild(a),
              n
            );
          })();
          j.appendChild(n);
        },
        repopulateMenu: () => {
          (() => {
            const e = document.querySelector("#menu");
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(a(w.general));
            const n = document.createElement("div");
            n.className = "projects";
            const t = document.createElement("div");
            (t.textContent = "Projects"),
              (t.id = "menuProjectTitle"),
              n.appendChild(t);
            for (let e = 0; e < w.projectList.length; e++) {
              let t = a(w.projectList[e]);
              t.setAttribute("id", e),
                n.appendChild(t),
                t.addEventListener("mouseenter", () => {
                  c(t);
                }),
                t.addEventListener("mouseleave", () => {
                  i(t);
                });
            }
            e.appendChild(n);
          })(),
            j.appendChild(D());
        },
        repopulateDisplay: () => {
          ((e) => {
            const n = document.querySelector("#display");
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            const t = document.createElement("div");
            (t.textContent = e.name), (t.id = "projectTitle"), n.appendChild(t);
            for (let t = 0; t < e.toDoList.length; t++)
              n.appendChild(l(e.toDoList[t], t));
          })(w.active),
            k.appendChild(T());
        },
        createTodoForm: () => {
          k.removeChild(document.querySelector("#todoButton"));
          const e = (() => {
            const e = document.createElement("div");
            (e.className = "form"), e.classList.add("toDoForm");
            const n = document.createElement("fieldset");
            e.appendChild(n);
            const t = document.createElement("input");
            (t.id = "name"),
              t.setAttribute("placeholder", "Name of Task:"),
              n.appendChild(t);
            const o = document.createElement("input");
            (o.id = "date"), o.setAttribute("type", "date"), n.appendChild(o);
            const a = document.createElement("input");
            (a.id = "notes"),
              a.setAttribute("type", "textarea"),
              a.setAttribute("placeholder", "Notes:"),
              n.appendChild(a);
            const c = document.createElement("button");
            (c.textContent = "Submit"),
              (c.onclick = () => {
                const e = new r(
                  document.querySelector("#name").value,
                  document.querySelector("#date").value,
                  document.querySelector("#notes").value
                );
                w.active.addToDo(e), L.repopulateDisplay(), L.repopulateMenu();
              });
            const i = document.createElement("button");
            return (
              (i.textContent = "Cancel"),
              (i.onclick = () => {
                L.repopulateDisplay();
              }),
              e.appendChild(c),
              e.appendChild(i),
              e
            );
          })();
          k.appendChild(e);
        },
      },
      D = () => {
        const e = document.createElement("button");
        return (
          (e.id = "projectButton"),
          (e.textContent = "+"),
          (e.onclick = () => L.createProjectForm()),
          e
        );
      },
      T = () => {
        const e = document.createElement("button");
        return (
          (e.id = "todoButton"),
          (e.textContent = "+"),
          (e.onclick = () => L.createTodoForm()),
          e
        );
      };
    L.repopulateMenu(), L.repopulateDisplay();
  })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQixFQUVsQ3ZFLEVBQVFELFlBQVkwRyxHQUNwQnpHLEVBQVFELFlBQVk0RyxHQUNiM0csQ0FBTyxFSW5CTXFILEdBQ2hCckIsRUFBUWpHLFlBQVlDLEVBQVEsR0FXOUJnSCxFQUFnQixLQUNsQixNQUFNMUQsRUFBYWhFLFNBQVNXLGNBQWMsVUFLMUMsT0FKQXFELEVBQVd2SSxHQUFHLGdCQUNkdUksRUFBV1ksWUFBWSxJQUN2QlosRUFBV3NCLFFBQVUsSUFBTU4sRUFBV2lDLG9CQUUvQmpELENBQVUsRUFHZjZELEVBQWEsS0FDZixNQUFNeEUsRUFBVXJELFNBQVNXLGNBQWMsVUFLdkMsT0FKQTBDLEVBQVE1SCxHQUFHLGFBQ1g0SCxFQUFRdUIsWUFBYSxJQUNyQnZCLEVBQVFpQyxRQUFVLElBQU1OLEVBQVc4QyxpQkFFNUJ6RSxDQUFPLEVBSWxCMkIsRUFBV08saUJBQ1hQLEVBQVdDLG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3Rm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTVJlc2V0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlSGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxuICAgIGNvbG9yOiAjZjBmOWZmO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNzVweDtcXG5cXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jbWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgICBjb2xvcjogIzExMTgyNztcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RCdXR0b24sICN0b2RvQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXG4gICAgY29sb3I6ICNlNWU3ZWI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4jbWVudVByb2plY3RUaXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ291bnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAgIGNvbG9yOiAjZTVlN2ViO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udHJhc2h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAgIGNvbG9yOiAjZTVlN2ViO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNkaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDcwcHg7XFxufVxcblxcbiNwcm9qZWN0VGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2Rve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgNGZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubm90ZXN7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzU7XFxufVxcblxcbi5hY3RpdmVUb0Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4XFxufVxcblxcbi5hY3RpdmVUb0RvXFxuLnRyYXNoe1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbn1cXG5cXG4uZG9uZVRhc2t7XFxuICAgIGNvbG9yOiAjOTRhM2I4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG5maWVsZHNldHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI25hbWV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9Eb0Zvcm1cXG4jbmFtZSwgI2RhdGUsICNub3Rlc3tcXG4gICAgd2lkdGg6IDMzJTtcXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxVQUFVOztBQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxuICAgIGNvbG9yOiAjZjBmOWZmO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNzVweDtcXG5cXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jbWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgICBjb2xvcjogIzExMTgyNztcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RCdXR0b24sICN0b2RvQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXG4gICAgY29sb3I6ICNlNWU3ZWI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4jbWVudVByb2plY3RUaXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDJmcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ291bnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAgIGNvbG9yOiAjZTVlN2ViO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udHJhc2h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAgIGNvbG9yOiAjZTVlN2ViO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNkaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDcwcHg7XFxufVxcblxcbiNwcm9qZWN0VGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2Rve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgNGZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubm90ZXN7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzU7XFxufVxcblxcbi5hY3RpdmVUb0Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhM2I4XFxufVxcblxcbi5hY3RpdmVUb0RvXFxuLnRyYXNoe1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbn1cXG5cXG4uZG9uZVRhc2t7XFxuICAgIGNvbG9yOiAjOTRhM2I4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG5maWVsZHNldHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI25hbWV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9Eb0Zvcm1cXG4jbmFtZSwgI2RhdGUsICNub3Rlc3tcXG4gICAgd2lkdGg6IDMzJTtcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1VtYnJlbGxhLCBEeW5hbWljRG9tfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRvRG9MaXN0ID0gW10pe1xuICAgICAgICB0aGlzLm5hbWU9bmFtZTtcbiAgICAgICAgdGhpcy50b0RvTGlzdD10b0RvTGlzdDtcbiAgICB9XG4gICAgYWRkVG9Ebyh0b2RvKXtcbiAgICAgICAgdGhpcy50b0RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJVbWJyZWxsYVwiLCBKU09OLnN0cmluZ2lmeShVbWJyZWxsYSkpO1xuICAgIFxuICAgIH1cbn1cblxuY2xhc3MgT3ZlcmFsbHtcbiAgICBjb25zdHJ1Y3RvcihnZW4sIHByb2plY3RMaXN0ID0gW10pe1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0PXByb2plY3RMaXN0O1xuICAgICAgICB0aGlzLmdlbmVyYWw9Z2VuO1xuICAgICAgICB0aGlzLmFjdGl2ZT1nZW47XG4gICAgfVxuICAgIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVW1icmVsbGFcIiwgSlNPTi5zdHJpbmdpZnkoVW1icmVsbGEpKTtcbiAgICB9XG4gICAgYWN0aXZhdGUocHJvamVjdCl7XG4gICAgICAgIHRoaXMuYWN0aXZlPXByb2plY3Q7XG4gICAgfVxuICAgIGdldCBkaXNwbGF5ZWRQcm9qZWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgICB9XG59XG5cbmNsYXNzIFRvRG97XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZT1cIk5vIERhdGUgU2V0XCIsIG5vdGVzID0gXCJcIiwgY29tcGxldGU9ZmFsc2Upe1xuICAgICAgICB0aGlzLm5hbWU9bmFtZTtcbiAgICAgICAgdGhpcy5kYXRlPWRhdGU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZT1jb21wbGV0ZTtcbiAgICB9XG59XG5leHBvcnQge1Byb2plY3QsIE92ZXJhbGwsIFRvRG99O1xuXG4iLCJpbXBvcnQge1VtYnJlbGxhLCBEeW5hbWljRG9tfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7UHJvamVjdCwgT3ZlcmFsbCwgVG9Eb30gZnJvbSAnLi9wcm9qZWN0SGFuZGxlcnMuanMnO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9ICgpID0+e1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZT1cImZvcm1cIjtcbiAgICBjb25zdCBmb3JtQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybUJsb2NrKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lOicpXG4gICAgbmFtZS5pZCA9IFwibmFtZVwiO1xuICAgIGZvcm1CbG9jay5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWUpO1xuICAgICAgICBVbWJyZWxsYS5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBEeW5hbWljRG9tLnJlcG9wdWxhdGVNZW51KCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgRHluYW1pY0RvbS5yZXBvcHVsYXRlTWVudSgpO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBuZXdUb2RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWU9XCJmb3JtXCI7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9Eb0Zvcm1cIik7XG4gICAgY29uc3QgZm9ybUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm1CbG9jayk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZS5pZD1cIm5hbWVcIjtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmFtZSBvZiBUYXNrOlwiKVxuICAgIGZvcm1CbG9jay5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlLmlkID0gXCJkYXRlXCI7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBmb3JtQmxvY2suYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVzLmlkPVwibm90ZXNcIjtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKTtcbiAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05vdGVzOicpO1xuICAgIGZvcm1CbG9jay5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBzdWJtaXQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJykudmFsdWUpO1xuICAgICAgICBVbWJyZWxsYS5hY3RpdmUuYWRkVG9Ebyh0b2RvKTtcbiAgICAgICAgRHluYW1pY0RvbS5yZXBvcHVsYXRlRGlzcGxheSgpO1xuICAgICAgICBEeW5hbWljRG9tLnJlcG9wdWxhdGVNZW51KCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIER5bmFtaWNEb20ucmVwb3B1bGF0ZURpc3BsYXkoKTtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHtuZXdQcm9qZWN0Rm9ybSwgbmV3VG9kb0Zvcm19OyIsImltcG9ydCB7RHluYW1pY0RvbSwgVW1icmVsbGF9IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBtZW51UmVzZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgICB3aGlsZShtZW51LmZpcnN0Q2hpbGQpe1xuICAgICAgICBtZW51LnJlbW92ZUNoaWxkKG1lbnUuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkSXRlbVRvTWVudShVbWJyZWxsYS5nZW5lcmFsKSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5jbGFzc05hbWU9J3Byb2plY3RzJztcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdFRpdGxlLmlkPVwibWVudVByb2plY3RUaXRsZVwiO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IFVtYnJlbGxhLnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGFkZEl0ZW1Ub01lbnUoVW1icmVsbGEucHJvamVjdExpc3RbaV0pXG4gICAgICAgIGNvbXBvbmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaSk7XG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgIGNvbXBvbmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT57XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0KGNvbXBvbmVudCk7XG4gICAgICAgIH0pOyBcbiAgICAgICAgY29tcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpbmFjdGl2ZVByb2plY3QoY29tcG9uZW50KVxuICAgICAgICB9KSBcbiAgICB9XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG59XG5cbmNvbnN0IGFkZEl0ZW1Ub01lbnUgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdJdGVtLmNsYXNzTmFtZT1cInByb2plY3RcIjtcbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ291bnQudGV4dENvbnRlbnQ9cHJvamVjdC50b0RvTGlzdC5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICB0YXNrQ291bnQuY2xhc3NOYW1lPSd0YXNrQ291bnQnO1xuICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQodGFza0NvdW50KTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50PXByb2plY3QubmFtZTtcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihVbWJyZWxsYS5wcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpICE9IC0xIHx8IHByb2plY3Q9PVVtYnJlbGxhLmdlbmVyYWwpeyAvL1RvIHRlc3QgdG8gc2VlIGlmIHRoZSBwcm9qZWN0IHN0aWxsIGV4aXN0cy4gSW1wb3J0YW50IGZvciB3aGVuIHdlIGRlbGV0ZSBwcm9qZWN0cy5cbiAgICAgICAgICAgIFVtYnJlbGxhLmFjdGl2YXRlKHByb2plY3QpO1xuICAgICAgICAgICAgRHluYW1pY0RvbS5yZXBvcHVsYXRlRGlzcGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pO1xuICAgIHJldHVybiBuZXdJdGVtO1xufVxuXG5jb25zdCBhY3RpdmVQcm9qZWN0ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGlmKCFjb21wb25lbnQuY29udGFpbnMoY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaCcpKSl7XG4gICAgICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRyYXNoLnRleHRDb250ZW50PVwiWFwiXG4gICAgICAgIHRyYXNoLmNsYXNzTmFtZT1cInRyYXNoXCI7XG4gICAgICAgIHRyYXNoLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBVbWJyZWxsYS5hY3RpdmF0ZShVbWJyZWxsYS5nZW5lcmFsKTtcbiAgICAgICAgICAgIFVtYnJlbGxhLnByb2plY3RMaXN0LnNwbGljZShjb21wb25lbnQuaWQsIDEpO1xuICAgICAgICAgICAgRHluYW1pY0RvbS5yZXBvcHVsYXRlRGlzcGxheSgpO1xuICAgICAgICAgICAgRHluYW1pY0RvbS5yZXBvcHVsYXRlTWVudSgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlVtYnJlbGxhXCIsIEpTT04uc3RyaW5naWZ5KFVtYnJlbGxhKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHRyYXNoKTtcbiAgICB9XG59XG5jb25zdCBpbmFjdGl2ZVByb2plY3QgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgY29tcG9uZW50LnJlbW92ZUNoaWxkKGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gnKSk7XG59XG5cbmNvbnN0IGRpc3BsYXlSZXNldCA9IChwcm9qZWN0KSA9PntcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcbiAgICB3aGlsZSAoZGlzcGxheS5maXJzdENoaWxkKXtcbiAgICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChkaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgdGl0bGUuaWQgPSBcInByb2plY3RUaXRsZVwiO1xuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvRG9MaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChhZGRJdGVtVG9EaXNwbGF5KHByb2plY3QudG9Eb0xpc3RbaV0sIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXk7XG59XG5cbmNvbnN0IGFkZEl0ZW1Ub0Rpc3BsYXkgPSAodG9EbywgaW5kZXgpID0+e1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrLmNsYXNzTmFtZT1cInRvZG9cIjtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2ZVRvRG8odGFzayl9KTtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGluYWN0aXZlVG9Ebyh0YXNrKX0pO1xuICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGluZGV4LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaWYodG9Eby5jb21wbGV0ZSA9PSB0cnVlKXtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcImRvbmVUYXNrXCIpO1xuICAgIH1cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoY2hlY2tib3guY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgICAgIHRvRG8uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9Eby5jb21wbGV0ZSk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJkb25lVGFza1wiKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdG9Eby5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9Eby5jb21wbGV0ZSlcbiAgICAgICAgICAgIGlmKHRhc2suY2xhc3NMaXN0LnJlbW92ZSgnZG9uZVRhc2snKSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVW1icmVsbGFcIiwgSlNPTi5zdHJpbmdpZnkoVW1icmVsbGEpKTtcbiAgICB9KVxuICAgICAgIFxuICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNvbnN0IHRvRG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb05hbWUudGV4dENvbnRlbnQ9dG9Eby5uYW1lO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xuICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSB0b0RvLmRhdGU7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG4gICAgaWYodG9Eby5ub3Rlcyl7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vdGVzLmNsYXNzTmFtZT0nbm90ZXMnO1xuICAgICAgICBub3Rlcy50ZXh0Q29udGVudD10b0RvLm5vdGVzO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmNvbnN0IGFjdGl2ZVRvRG8gPSAodGFzaykgPT4ge1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVRvRG9cIik7XG4gICAgaWYoIXRhc2suY29udGFpbnModGFzay5xdWVyeVNlbGVjdG9yKCcudHJhc2gnKSkpe1xuICAgICAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyYXNoLmNsYXNzTmFtZT1cInRyYXNoXCI7XG4gICAgdHJhc2gudGV4dENvbnRlbnQ9XCJYXCI7XG4gICAgdHJhc2gub25jbGljayA9ICgpID0+e1xuICAgICAgICBVbWJyZWxsYS5hY3RpdmUudG9Eb0xpc3Quc3BsaWNlKHRhc2suaWQsIDEpO1xuICAgICAgICBEeW5hbWljRG9tLnJlcG9wdWxhdGVEaXNwbGF5KCk7XG4gICAgICAgIER5bmFtaWNEb20ucmVwb3B1bGF0ZU1lbnUoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVW1icmVsbGFcIiwgSlNPTi5zdHJpbmdpZnkoVW1icmVsbGEpKTtcbiAgICB9XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0cmFzaCk7XG4gICAgfVxufVxuXG5cbmNvbnN0IGluYWN0aXZlVG9EbyA9ICh0YXNrKSA9PiB7XG4gICAgdGFzay5yZW1vdmVDaGlsZCh0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50cmFzaCcpKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZVRvRG8nKTtcbn1cblxuZXhwb3J0IHttZW51UmVzZXQsIGRpc3BsYXlSZXNldH07IiwiaW1wb3J0IHtVbWJyZWxsYSwgRHluYW1pY0RvbX0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQge1Byb2plY3QsIE92ZXJhbGwsIFRvRG99IGZyb20gJy4vcHJvamVjdEhhbmRsZXJzLmpzJztcblxuY29uc3QgcmVtYWtlVG9Eb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGxldCB0b0RvQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9Eb0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihwcm9qZWN0LnRvRG9MaXN0W2ldLmRhdGUpe1xuICAgICAgICBsZXQgbmV3VG9EbyA9IG5ldyBUb0RvKHByb2plY3QudG9Eb0xpc3RbaV0ubmFtZSwgcHJvamVjdC50b0RvTGlzdFtpXS5kYXRlLCBwcm9qZWN0LnRvRG9MaXN0W2ldLm5vdGVzLCBwcm9qZWN0LnRvRG9MaXN0W2ldLmNvbXBsZXRlKTtcbiAgICAgICAgdG9Eb0FycmF5LnB1c2gobmV3VG9Ebyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCBuZXdUb0RvID0gbmV3IFRvRG8ocHJvamVjdC50b0RvTGlzdFtpXS5uYW1lLCBcIlwiLCBwcm9qZWN0LnRvRG9MaXN0W2ldLmNvbXBsZXRlKTtcbiAgICAgICAgICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b0RvQXJyYXk7XG59XG5cbmNvbnN0IHJlbWFrZVVtYnJlbGxhID0gKGVtcHR5T2JqZWN0KSA9PiB7XG4gICAgY29uc3QgZ2VuZXJhbCA9IG5ldyBQcm9qZWN0KGVtcHR5T2JqZWN0LmdlbmVyYWwubmFtZSwgcmVtYWtlVG9Eb3MoZW1wdHlPYmplY3QuZ2VuZXJhbCkpO1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPCBlbXB0eU9iamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0b0RvQXJyYXkgPSByZW1ha2VUb0RvcyhlbXB0eU9iamVjdC5wcm9qZWN0TGlzdFtpXSk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoZW1wdHlPYmplY3QucHJvamVjdExpc3RbaV0ubmFtZSwgdG9Eb0FycmF5KTtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgT3ZlcmFsbChnZW5lcmFsLCBwcm9qZWN0QXJyYXkpOyBcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtYWtlVW1icmVsbGE7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHtQcm9qZWN0LCBPdmVyYWxsLCBUb0RvfSBmcm9tICcuL3Byb2plY3RIYW5kbGVycy5qcyc7XG5pbXBvcnQge25ld1Byb2plY3RGb3JtLCBuZXdUb2RvRm9ybX0gZnJvbSAnLi9uZXdGb3Jtcy5qcyc7XG5pbXBvcnQge21lbnVSZXNldCwgZGlzcGxheVJlc2V0fSBmcm9tICcuL0RPTVJlc2V0cy5qcyc7XG5pbXBvcnQgcmVtYWtlVW1icmVsbGEgZnJvbSAnLi9sb2NhbFN0b3JhZ2VIYW5kbGVycy5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IG1lbnUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlcIik7XG5cblxuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJVbWJyZWxsYVwiKSl7XG4gICAgXG4gICAgdmFyIEdlbmVyYWwgPSBuZXcgUHJvamVjdChcIkdlbmVyYWxcIik7XG4gICAgdmFyIFVtYnJlbGxhID0gbmV3IE92ZXJhbGwoR2VuZXJhbCk7XG4gICAgXG59IGVsc2V7XG4gICAgVW1icmVsbGEgPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlVtYnJlbGxhXCIpKSk7XG4gICAgVW1icmVsbGEgPSByZW1ha2VVbWJyZWxsYShVbWJyZWxsYSk7XG59XG5cblxuXG5cblxuXG5jb25zdCBEeW5hbWljRG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+e1xuICAgICAgICBtZW51LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnV0dG9uJykpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9ICAgIFxuICAgIGNvbnN0IHJlcG9wdWxhdGVNZW51ID0gKCkgPT57XG4gICAgICAgIG1lbnVSZXNldCgpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24oKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwb3B1bGF0ZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlSZXNldChVbWJyZWxsYS5hY3RpdmUpO1xuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHRvZG9CdXR0b24oKSk7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRvZG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0J1dHRvblwiKSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXdUb2RvRm9ybSgpO1xuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0Rm9ybSxcbiAgICAgICAgcmVwb3B1bGF0ZU1lbnUsXG4gICAgICAgIHJlcG9wdWxhdGVEaXNwbGF5LFxuICAgICAgICBjcmVhdGVUb2RvRm9ybSxcbiAgICB9XG59KSgpO1xuXG5cbmNvbnN0IHByb2plY3RCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3QuaWQ9XCJwcm9qZWN0QnV0dG9uXCI7XG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudD1cIitcIjtcbiAgICBhZGRQcm9qZWN0Lm9uY2xpY2sgPSAoKSA9PiBEeW5hbWljRG9tLmNyZWF0ZVByb2plY3RGb3JtKCk7XG5cbiAgICByZXR1cm4gYWRkUHJvamVjdDtcbn1cblxuY29uc3QgdG9kb0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVG9Eby5pZD1cInRvZG9CdXR0b25cIjtcbiAgICBhZGRUb0RvLnRleHRDb250ZW50PSBcIitcIjtcbiAgICBhZGRUb0RvLm9uY2xpY2sgPSAoKSA9PiBEeW5hbWljRG9tLmNyZWF0ZVRvZG9Gb3JtKCk7XG5cbiAgICByZXR1cm4gYWRkVG9Ebztcbn1cblxuXG5EeW5hbWljRG9tLnJlcG9wdWxhdGVNZW51KCk7XG5EeW5hbWljRG9tLnJlcG9wdWxhdGVEaXNwbGF5KCk7XG5cbmV4cG9ydCB7VW1icmVsbGEsIER5bmFtaWNEb219O1xuXG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJhcGkiLCJkb21BUEkiLCJ1cGRhdGUiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsIm1lbW8iLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5jIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRvRG9MaXN0IiwiYWRkVG9EbyIsInRvZG8iLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsInNldEl0ZW0iLCJVbWJyZWxsYSIsIk92ZXJhbGwiLCJnZW4iLCJwcm9qZWN0TGlzdCIsImdlbmVyYWwiLCJhY3RpdmUiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsImFjdGl2YXRlIiwiZGlzcGxheWVkUHJvamVjdCIsIlRvRG8iLCJkYXRlIiwibm90ZXMiLCJjb21wbGV0ZSIsImFkZEl0ZW1Ub01lbnUiLCJuZXdJdGVtIiwiY2xhc3NOYW1lIiwidGFza0NvdW50IiwidGV4dENvbnRlbnQiLCJwcm9qZWN0TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmRleE9mIiwiRHluYW1pY0RvbSIsInJlcG9wdWxhdGVEaXNwbGF5IiwiYWN0aXZlUHJvamVjdCIsImNvbXBvbmVudCIsImNvbnRhaW5zIiwidHJhc2giLCJvbmNsaWNrIiwicmVwb3B1bGF0ZU1lbnUiLCJpbmFjdGl2ZVByb2plY3QiLCJhZGRJdGVtVG9EaXNwbGF5IiwidG9EbyIsInRhc2siLCJhY3RpdmVUb0RvIiwiaW5hY3RpdmVUb0RvIiwiY2hlY2tib3giLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInRvRG9OYW1lIiwidG9Eb0RhdGUiLCJyZW1ha2VUb0RvcyIsInRvRG9BcnJheSIsIm5ld1RvRG8iLCJtZW51IiwiZGlzcGxheSIsImdldEl0ZW0iLCJlbXB0eU9iamVjdCIsInByb2plY3RBcnJheSIsIm5ld1Byb2plY3QiLCJwYXJzZSIsIkdlbmVyYWwiLCJjcmVhdGVQcm9qZWN0Rm9ybSIsImZvcm1CbG9jayIsInN1Ym1pdCIsInZhbHVlIiwiY2FuY2VsIiwibmV3UHJvamVjdEZvcm0iLCJwcm9qZWN0cyIsInByb2plY3RUaXRsZSIsIm1lbnVSZXNldCIsInByb2plY3RCdXR0b24iLCJ0aXRsZSIsImRpc3BsYXlSZXNldCIsInRvZG9CdXR0b24iLCJjcmVhdGVUb2RvRm9ybSIsIm5ld1RvZG9Gb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==
