// Dictionnaire Morse
            const morseCodeDict = {
                'A': '·−', 'B': '−···', 'C': '−·−·', 'D': '−··', 'E': '·', 'F': '··−·', 'G': '−−·', 'H': '····', 'I': '··', 'J': '·−−−', 'K': '−·−', 'L': '·−··', 'M': '−−', 'N': '−·', 'O': '−−−', 'P': '·−−·', 'Q': '−−·−', 'R': '·−·', 'S': '···', 'T': '−', 'U': '··−', 'V': '···−', 'W': '·−−', 'X': '−··−', 'Y': '−·−−', 'Z': '−−··', '1': '·−−−−', '2': '··−−−', '3': '···−−', '4': '····−', '5': '·····', '6': '−····', '7': '−−···', '8': '−−−··', '9': '−−−−·', '0': '−−−−−', ' ': ' ', ',': '−−··−−', '.': '·−·−·−', '?': '··−−··', "'": '·−−−−·', '!': '−·−·−−', '/': '−··−·', '(': '−·−−·', ')': '−·−−·−', '&': '·−···', ':': '−−−···', ';': '−·−·−·', '=': '−···−', '+': '·−·−·', '-': '−····−', '_': '··−−·−', '"': '·−··−·', '$': '···−··−', '@': '·−−·−·', 'À': '·−−·−', 'Ä': '·−·−', 'Å': '·−−·−', 'Æ': '·−·−', 'Ç': '−·−··', 'É': '··−··', 'È': '·−··−', 'Ê': '·−··−', 'Ë': '··−··', 'Ï': '··', 'Î': '··', 'Ô': '−−−·', 'Œ': '−−−·−', 'Ö': '−−−·', 'Ù': '··−−', 'Ü': '··−−', 'Û': '··−−', 'Ý': '−·−−', 'Ñ': '−−·−−', 'ß': '···−−−···', 'Ø': '−−−·−', 'Þ': '·−−−·', 'Æ': '·−·−'
            };

            // Fonction de traduction
            function translateToMorse() {
                const input = document.getElementById('french').value.toUpperCase();
                let output = '';
                for (let i = 0; i < input.length; i++) {
                    output += morseCodeDict[input[i]] + ' ';
                }
                document.getElementById('code').value = output;
            }

            function translateToFrench() {
                const input = document.getElementById('code').value;
                let output = '';
                const morseCodeDictReverse = {};
                for (let key in morseCodeDict) {
                    morseCodeDictReverse[morseCodeDict[key]] = key;
                }
                const words = input.split("  ");
                for (let i = 0; i < words.length; i++) {
                    const letters = words[i].split(' ');
                    for (let j = 0; j < letters.length; j++) {
                        output += morseCodeDictReverse[letters[j]];
                    }
                    output += ' ';
                }
                document.getElementById('french').value = output;
            }

            //Fonction pour passer aux caractère normaux
            function transformHyphensAndDots(event) {
                document.getElementById('code').addEventListener('input', function(event) {
                    var char = String(event.key)
                    console.log(char)
                    if (char !== '.' && char !== '_') {
                        event.preventDefault();
                    }
                });
                translateToFrench();
            }

            document.getElementById('code').addEventListener('input', transformHyphensAndDots);

            // Ajout de l'écouteur d'événements
            document.getElementById('french').addEventListener('input', translateToMorse);