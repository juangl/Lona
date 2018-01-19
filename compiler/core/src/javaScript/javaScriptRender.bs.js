// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                      = require("bs-platform/lib/js/list.js");
var Curry                     = require("bs-platform/lib/js/curry.js");
var Prettier                  = require("prettier");
var Render$LonaCompilerCore   = require("../render.bs.js");
var Prettier$LonaCompilerCore = require("../prettier.bs.js");

function renderBinaryOperator(x) {
  var tmp;
  switch (x) {
    case 0 : 
        tmp = "===";
        break;
    case 1 : 
        tmp = "!==";
        break;
    case 2 : 
        tmp = ">";
        break;
    case 3 : 
        tmp = ">=";
        break;
    case 4 : 
        tmp = "<";
        break;
    case 5 : 
        tmp = "<=";
        break;
    case 6 : 
        tmp = "+";
        break;
    case 7 : 
        tmp = "";
        break;
    
  }
  return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], tmp);
}

function render(ast) {
  if (typeof ast === "number") {
    return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "");
  } else {
    switch (ast.tag | 0) {
      case 0 : 
          return Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                          Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "return"),
                                    /* :: */[
                                      Prettier.doc.builders.line,
                                      /* :: */[
                                        Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "("),
                                        /* [] */0
                                      ]
                                    ]
                                  ])),
                          /* :: */[
                            Prettier.doc.builders.indent(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                      Prettier.doc.builders.line,
                                      /* :: */[
                                        render(ast[0]),
                                        /* [] */0
                                      ]
                                    ])),
                            /* :: */[
                              Prettier.doc.builders.line,
                              /* :: */[
                                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ");"),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]));
      case 1 : 
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], JSON.stringify(ast[0][/* data */1]));
      case 2 : 
          return Prettier.doc.builders.group(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                              Prettier.doc.builders.softline,
                              /* :: */[
                                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "."),
                                /* [] */0
                              ]
                            ]), List.map(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ast[0])));
      case 3 : 
          var $$extends = ast[1];
          var name = ast[0];
          var decl = $$extends ? /* :: */[
              Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "class"),
              /* :: */[
                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], name),
                /* :: */[
                  Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "extends"),
                  /* :: */[
                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], $$extends[0]),
                    /* [] */0
                  ]
                ]
              ]
            ] : /* :: */[
              Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "class"),
              /* :: */[
                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], name),
                /* [] */0
              ]
            ];
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                      Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.line, decl),
                                /* :: */[
                                  Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], " {"),
                                  /* [] */0
                                ]
                              ])),
                      /* :: */[
                        Prettier.doc.builders.indent(Render$LonaCompilerCore.prefixAll(Prettier.doc.builders.hardline, List.map(render, ast[2]))),
                        /* :: */[
                          Prettier.doc.builders.hardline,
                          /* :: */[
                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "};"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]);
      case 4 : 
          var parameterList = Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.line, List.map(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ast[1]));
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                      Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ast[0]),
                                /* :: */[
                                  Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "("),
                                  /* :: */[
                                    parameterList,
                                    /* :: */[
                                      Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ")"),
                                      /* :: */[
                                        Prettier.doc.builders.line,
                                        /* :: */[
                                          Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "{"),
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ])),
                      /* :: */[
                        Prettier.doc.builders.indent(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.hardline, List.map(render, ast[2]))),
                        /* :: */[
                          Prettier.doc.builders.line,
                          /* :: */[
                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "}"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]);
      case 5 : 
          var parameterList$1 = Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ", "), List.map(render, ast[1]));
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* fill */3], /* :: */[
                      render(ast[0]),
                      /* :: */[
                        Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "("),
                        /* :: */[
                          parameterList$1,
                          /* :: */[
                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ")"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]);
      case 6 : 
          var value = render(ast[1]);
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                      Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ast[0]),
                      /* :: */[
                        Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "={"),
                        /* :: */[
                          value,
                          /* :: */[
                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "}"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]);
      case 7 : 
          var tag = ast[0];
          var openingContent = Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.line, List.map(render, ast[1]));
          var opening = Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "<"),
                    /* :: */[
                      Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], tag),
                      /* :: */[
                        Prettier.doc.builders.indent(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                  Prettier.doc.builders.line,
                                  /* :: */[
                                    openingContent,
                                    /* [] */0
                                  ]
                                ])),
                        /* :: */[
                          Prettier.doc.builders.softline,
                          /* :: */[
                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ">"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]));
          var closing = Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "</"),
                    /* :: */[
                      Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], tag),
                      /* :: */[
                        Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ">"),
                        /* [] */0
                      ]
                    ]
                  ]));
          var children = Prettier.doc.builders.indent(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                    Prettier.doc.builders.line,
                    /* :: */[
                      Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.line, List.map(render, ast[2])),
                      /* [] */0
                    ]
                  ]));
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                      opening,
                      /* :: */[
                        children,
                        /* :: */[
                          Prettier.doc.builders.line,
                          /* :: */[
                            closing,
                            /* [] */0
                          ]
                        ]
                      ]
                    ]);
      case 8 : 
          return Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                          Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "let "),
                          /* :: */[
                            render(ast[0]),
                            /* :: */[
                              Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ";"),
                              /* [] */0
                            ]
                          ]
                        ]));
      case 9 : 
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* fill */3], /* :: */[
                      Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                render(ast[0]),
                                /* :: */[
                                  Prettier.doc.builders.line,
                                  /* :: */[
                                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "="),
                                    /* [] */0
                                  ]
                                ]
                              ])),
                      /* :: */[
                        Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], " "),
                        /* :: */[
                          render(ast[1]),
                          /* [] */0
                        ]
                      ]
                    ]);
      case 10 : 
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                      render(ast[0]),
                      /* :: */[
                        renderBinaryOperator(ast[1]),
                        /* :: */[
                          render(ast[2]),
                          /* [] */0
                        ]
                      ]
                    ]);
      case 11 : 
          return Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                      Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "if"),
                                /* :: */[
                                  Prettier.doc.builders.line,
                                  /* :: */[
                                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "("),
                                    /* :: */[
                                      Prettier.doc.builders.softline,
                                      /* :: */[
                                        render(ast[0]),
                                        /* :: */[
                                          Prettier.doc.builders.softline,
                                          /* :: */[
                                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ")"),
                                            /* :: */[
                                              Prettier.doc.builders.line,
                                              /* :: */[
                                                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "{"),
                                                /* [] */0
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ])),
                      /* :: */[
                        Prettier.doc.builders.indent(Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Prettier.doc.builders.hardline, List.map(render, ast[1]))),
                        /* :: */[
                          Prettier.doc.builders.hardline,
                          /* :: */[
                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "}"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]);
      case 12 : 
          var body = ast[0];
          var match = +(List.length(body) > 0);
          var maybeLine = match !== 0 ? Prettier.doc.builders.line : Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "");
          var body$1 = Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ","),
                    /* :: */[
                      Prettier.doc.builders.line,
                      /* [] */0
                    ]
                  ]), List.map(render, body));
          return Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                          Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "["),
                          /* :: */[
                            Prettier.doc.builders.indent(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                      maybeLine,
                                      /* :: */[
                                        body$1,
                                        /* [] */0
                                      ]
                                    ])),
                            /* :: */[
                              maybeLine,
                              /* :: */[
                                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "]"),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]));
      case 13 : 
          var body$2 = ast[0];
          var match$1 = +(List.length(body$2) > 0);
          var maybeLine$1 = match$1 !== 0 ? Prettier.doc.builders.line : Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "");
          var body$3 = Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                    Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ","),
                    /* :: */[
                      Prettier.doc.builders.line,
                      /* [] */0
                    ]
                  ]), List.map(render, body$2));
          return Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                          Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "{"),
                          /* :: */[
                            Prettier.doc.builders.indent(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                                      maybeLine$1,
                                      /* :: */[
                                        body$3,
                                        /* [] */0
                                      ]
                                    ])),
                            /* :: */[
                              maybeLine$1,
                              /* :: */[
                                Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], "}"),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]));
      case 14 : 
          return Prettier.doc.builders.group(Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                          render(ast[0]),
                          /* :: */[
                            Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* s */0], ": "),
                            /* :: */[
                              render(ast[1]),
                              /* [] */0
                            ]
                          ]
                        ]));
      case 15 : 
          return Render$LonaCompilerCore.prefixAll(Prettier.doc.builders.hardline, List.map(render, ast[0]));
      case 16 : 
          return Curry._2(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* join */4], Curry._1(Prettier$LonaCompilerCore.Doc[/* Builders */0][/* concat */2], /* :: */[
                          Prettier.doc.builders.hardline,
                          /* :: */[
                            Prettier.doc.builders.hardline,
                            /* [] */0
                          ]
                        ]), List.map(render, ast[0]));
      
    }
  }
}

function toString(ast) {
  var doc = render(ast);
  var printerOptions = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: /* false */0
  };
  return Prettier.doc.printer.printDocToString(doc, printerOptions).formatted;
}

var Ast = 0;

exports.Ast                  = Ast;
exports.renderBinaryOperator = renderBinaryOperator;
exports.render               = render;
exports.toString             = toString;
/* prettier Not a pure module */
