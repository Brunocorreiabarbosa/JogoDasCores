const cores = new Array("AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen");

var coresSorteadas = new Array();

function sorteioCores() {
    for (var i = 0; i < 10; i++) {
        var verificar = false;
        var sorteada;
        do {
            sorteada = cores[Math.floor(Math.random() * 140)];

            for (var b = 1; b <= coresSorteadas.length; b++) {
                if (sorteada == coresSorteadas[b]) {
                    verificar = false;
                } else if (b == coresSorteadas.length) {
                    verificar = true;
                }
            }

            if (coresSorteadas.length == 0) {
                verificar = true;
            }
        } while (verificar == false);
        
        coresSorteadas[i] = sorteada;
    }
}

function continuacao() {
    var corEscolhida = coresSorteadas[Math.floor(Math.random() * 10)];
    console.log(typeof corEscolhida);
    var acertou = false;

    do {
        var mensagem = "Qual dessas cores eu estou pensando ? \n";

        for (var i = 0; i < 10; i++) {
            mensagem += coresSorteadas[i] + ", ";
        }

        mensagem += "\n\nqual cor eu escolhi ?";
        var inputUsuario = prompt(mensagem);
        console.log(inputUsuario);        

        if (inputUsuario.toLowerCase() == corEscolhida.toLowerCase()) {
            document.body.style.backgroundColor = corEscolhida;
            acertou = true;
        } else {
            let letraInput = inputUsuario.charAt(0).toLowerCase();
            let letraCorSorteada = corEscolhida.charAt(0).toLowerCase();
            if (letraInput < letraCorSorteada) {
                alert("A cor que você escolheu começa com a letra " + letraInput + ".\n\nA sua cor é alfabeticamente anterior à minha. Tente novamente.");
            } else if (letraInput > letraCorSorteada) {
                alert("A cor que você escolheu começa com a letra " + letraInput + ".\n\nA sua cor é alfabeticamente posterior à minha. Tente novamente.");
            } else if (letraInput == letraCorSorteada) {
                alert("A cor que você escolheu começa com a letra " + letraInput + ".\n\nA sua cor começa com a mesma letra que a minha. Tente novamente.");
            } else {
                alert("Ocorreu algum erro.");
            }
        }
    } while (acertou == false);
}