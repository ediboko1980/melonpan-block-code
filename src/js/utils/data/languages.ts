export type Language = { label: string; value: string; common: boolean };

export const languages = [
	{ value: "css", label: "CSS", common: true },
	{ value: "markup", label: "HTML, XML, Markup", common: true },
	{ value: "javascript", label: "JavaScript", common: true },
	{ value: "jsx", label: "React JSX", common: true },
	{ value: "php", label: "PHP", common: true },
	{ value: "csharp", label: "C#", common: true },
	{ value: "cpp", label: "C++", common: true },
	{ value: "go", label: "Go", common: true },
	{ value: "json", label: "JSON", common: true },
	{ value: "java", label: "Java", common: true },
	{ value: "python", label: "Python", common: true },
	{ value: "ruby", label: "Ruby", common: true },
	{ value: "swift", label: "Swift", common: true },
	{ value: "typescript", label: "TypeScript", common: true },
	//
	{ value: "abap", label: "ABAP", common: false },
	{ value: "abnf", label: "Augmented Backus–Naur form", common: false },
	{ value: "actionscript", label: "ActionScript", common: false },
	{ value: "ada", label: "Ada", common: false },
	{ value: "apacheconf", label: "Apache Configuration", common: false },
	{ value: "apl", label: "APL", common: false },
	{ value: "applescript", label: "AppleScript", common: false },
	{ value: "arduino", label: "Arduino", common: false },
	{ value: "arff", label: "ARFF", common: false },
	{ value: "asciidoc", label: "AsciiDoc", common: false },
	{ value: "asm6502", label: "6502 Assembly", common: false },
	{ value: "aspnet", label: "ASP.NET (C#)", common: false },
	{ value: "autohotkey", label: "AutoHotkey", common: false },
	{ value: "autoit", label: "AutoIt", common: false },
	{ value: "bash", label: "Bash", common: false },
	{ value: "basic", label: "BASIC", common: false },
	{ value: "batch", label: "Batch", common: false },
	{ value: "bison", label: "Bison", common: false },
	{ value: "bnf", label: "Backus–Naur form", common: false },
	{ value: "brainfuck", label: "Brainfuck", common: false },
	{ value: "bro", label: "Bro", common: false },
	{ value: "c", label: "C", common: false },
	{ value: "cil", label: "CIL", common: false },
	{ value: "clike", label: "C-like", common: false },
	{ value: "coffeescript", label: "CoffeeScript", common: false },
	{ value: "cmake", label: "CMake", common: false },
	{ value: "clojure", label: "Clojure", common: false },
	{ value: "crystal", label: "Crystal", common: false },
	{ value: "csp", label: "Content-Security-Policy", common: false },
	// { value: "css-extras", label: "CSS Extras", common: false },
	{ value: "d", label: "D", common: false },
	{ value: "dart", label: "Dart", common: false },
	{ value: "diff", label: "Diff", common: false },
	{ value: "django", label: "Django/Jinja2", common: false },
	{ value: "dns-zone-file", label: "DNS zone file", common: false },
	{ value: "docker", label: "Docker", common: false },
	{ value: "ebnf", label: "Extended Backus–Naur form", common: false },
	{ value: "eiffel", label: "Eiffel", common: false },
	{ value: "ejs", label: "EJS", common: false },
	{ value: "elixir", label: "Elixir", common: false },
	{ value: "elm", label: "Elm", common: false },
	{ value: "erb", label: "ERB", common: false },
	{ value: "erlang", label: "Erlang", common: false },
	{ value: "fsharp", label: "F#", common: false },
	{ value: "flow", label: "Flow", common: false },
	{ value: "fortran", label: "Fortran", common: false },
	{ value: "gcode", label: "G-code", common: false },
	{ value: "gedcom", label: "GEDCOM", common: false },
	{ value: "gherkin", label: "Gherkin", common: false },
	{ value: "git", label: "Git", common: false },
	{ value: "glsl", label: "GLSL", common: false },
	{ value: "gml", label: "GameMaker Language", common: false },
	{ value: "graphql", label: "GraphQL", common: false },
	{ value: "groovy", label: "Groovy", common: false },
	{ value: "haml", label: "Haml", common: false },
	{ value: "handlebars", label: "Handlebars", common: false },
	{ value: "haskell", label: "Haskell", common: false },
	{ value: "haxe", label: "Haxe", common: false },
	{ value: "hcl", label: "HCL", common: false },
	{ value: "http", label: "HTTP", common: false },
	{ value: "hpkp", label: "HTTP Public-Key-Pins", common: false },
	{ value: "hsts", label: "HTTP Strict-Transport-Security", common: false },
	{ value: "ichigojam", label: "IchigoJam", common: false },
	{ value: "icon", label: "Icon", common: false },
	{ value: "inform7", label: "Inform 7", common: false },
	{ value: "ini", label: "Ini", common: false },
	{ value: "io", label: "Io", common: false },
	{ value: "j", label: "J", common: false },
	{ value: "javadoc", label: "JavaDoc", common: false },
	{ value: "javadoclike", label: "JavaDoc-like", common: false },
	{ value: "javastacktrace", label: "Java stack trace", common: false },
	{ value: "jolie", label: "Jolie", common: false },
	{ value: "jq", label: "JQ", common: false },
	{ value: "jsdoc", label: "JSDoc", common: false },
	// { value: "js-extras", label: "JS Extras", common: false },
	{ value: "jsonp", label: "JSONP", common: false },
	{ value: "json5", label: "JSON5", common: false },
	{ value: "julia", label: "Julia", common: false },
	{ value: "keyman", label: "Keyman", common: false },
	{ value: "kotlin", label: "Kotlin", common: false },
	{ value: "latex", label: "LaTeX", common: false },
	{ value: "less", label: "Less", common: false },
	{ value: "liquid", label: "Liquid", common: false },
	{ value: "lisp", label: "Lisp", common: false },
	{ value: "livescript", label: "LiveScript", common: false },
	{ value: "lolcode", label: "LOLCODE", common: false },
	{ value: "lua", label: "Lua", common: false },
	{ value: "makefile", label: "Makefile", common: false },
	{ value: "markdown", label: "Markdown", common: false },
	{ value: "markup-templating", label: "Markup templating", common: false },
	{ value: "matlab", label: "MATLAB", common: false },
	{ value: "mel", label: "MEL", common: false },
	{ value: "mizar", label: "Mizar", common: false },
	{ value: "monkey", label: "Monkey", common: false },
	{ value: "n1ql", label: "N1QL", common: false },
	{ value: "n4js", label: "N4JS", common: false },
	{ value: "nand2tetris-hdl", label: "Nand To Tetris HDL", common: false },
	{ value: "nasm", label: "NASM", common: false },
	{ value: "nginx", label: "nginx", common: false },
	{ value: "nim", label: "Nim", common: false },
	{ value: "nix", label: "Nix", common: false },
	{ value: "nsis", label: "NSIS", common: false },
	{ value: "objectivec", label: "Objective-C", common: false },
	{ value: "ocaml", label: "OCaml", common: false },
	{ value: "opencl", label: "OpenCL", common: false },
	{ value: "oz", label: "Oz", common: false },
	{ value: "parigp", label: "PARI/GP", common: false },
	{ value: "parser", label: "Parser", common: false },
	{ value: "pascal", label: "Pascal", common: false },
	{ value: "pascaligo", label: "Pascaligo", common: false },
	{ value: "pcaxis", label: "PC-Axis", common: false },
	{ value: "perl", label: "Perl", common: false },
	{ value: "phpdoc", label: "PHPDoc", common: false },
	// { value: "php-extras", label: "PHP Extras", common: false },
	{ value: "plsql", label: "PL/SQL", common: false },
	{ value: "powershell", label: "PowerShell", common: false },
	{ value: "processing", label: "Processing", common: false },
	{ value: "prolog", label: "Prolog", common: false },
	{ value: "properties", label: ".properties", common: false },
	{ value: "protobuf", label: "Protocol Buffers", common: false },
	{ value: "pug", label: "Pug", common: false },
	{ value: "puppet", label: "Puppet", common: false },
	{ value: "pure", label: "Pure", common: false },
	{ value: "q", label: "Q (kdb+ database)", common: false },
	{ value: "qore", label: "Qore", common: false },
	{ value: "r", label: "R", common: false },
	{ value: "tsx", label: "React TSX", common: false },
	{ value: "renpy", label: "Ren'py", common: false },
	{ value: "reason", label: "Reason", common: false },
	{ value: "regex", label: "Regex", common: false },
	{ value: "rest", label: "reST (reStructuredText)", common: false },
	{ value: "rip", label: "Rip", common: false },
	{ value: "roboconf", label: "Roboconf", common: false },
	{ value: "rust", label: "Rust", common: false },
	{ value: "sas", label: "SAS", common: false },
	{ value: "sass", label: "Sass (Sass)", common: false },
	{ value: "scss", label: "Sass (Scss)", common: false },
	{ value: "scala", label: "Scala", common: false },
	{ value: "scheme", label: "Scheme", common: false },
	{ value: "shell-session", label: "Shell session", common: false },
	{ value: "smalltalk", label: "Smalltalk", common: false },
	{ value: "smarty", label: "Smarty", common: false },
	{ value: "sql", label: "SQL", common: false },
	{ value: "soy", label: "Soy (Closure Template)", common: false },
	{ value: "stylus", label: "Stylus", common: false },
	{ value: "tap", label: "TAP", common: false },
	{ value: "tcl", label: "Tcl", common: false },
	{ value: "textile", label: "Textile", common: false },
	{ value: "toml", label: "TOML", common: false },
	{ value: "tt2", label: "Template Toolkit 2", common: false },
	{ value: "twig", label: "Twig", common: false },
	{ value: "t4-cs", label: "T4 Text Templates (C#)", common: false },
	{ value: "t4-vb", label: "T4 Text Templates (VB)", common: false },
	{ value: "t4-templating", label: "T4 templating", common: false },
	{ value: "vala", label: "Vala", common: false },
	{ value: "vbnet", label: "VB.Net", common: false },
	{ value: "velocity", label: "Velocity", common: false },
	{ value: "verilog", label: "Verilog", common: false },
	{ value: "vhdl", label: "VHDL", common: false },
	{ value: "vim", label: "vim", common: false },
	{ value: "visual-basic", label: "Visual Basic", common: false },
	{ value: "wasm", label: "WebAssembly", common: false },
	{ value: "wiki", label: "Wiki markup", common: false },
	{ value: "xeora", label: "Xeora", common: false },
	{ value: "xojo", label: "Xojo (REALbasic)", common: false },
	{ value: "xquery", label: "XQuery", common: false },
	{ value: "yaml", label: "YAML", common: false }
];
