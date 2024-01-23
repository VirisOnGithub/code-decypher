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
                document.getElementById('code').value = event.target.value.replace(/-/g, '−').replace(/\./g, '·');
                translateToFrench();
            }

            document.getElementById('code').addEventListener('input', transformHyphensAndDots);

            // Ajout de l'écouteur d'événements
            document.getElementById('french').addEventListener('input', translateToMorse);

//CESAR CODE
            let selectedCode = 'morse'
            
            function cesarSelect() {
                document.querySelector('.cesaroptions').style.display = 'block';
                selectedCode = 'cesar';
            }

            function morseSelect() {
                document.querySelector('.cesaroptions').style.display = 'none';
                selectedCode = 'morse';
            }

            function cesarEncode() {
                const input = document.getElementById('french').value.toUpperCase();
                const output = document.getElementById('code');
                const shift = parseInt(document.getElementById('cesaroptions').value)%26;
                output.value = cesarEncodeText(input, shift);
            }

            function cesarDecode() {
                const input = document.getElementById('code').value.toUpperCase();
                const output = document.getElementById('french');
                const shift = parseInt(document.getElementById('cesaroptions').value)%26;
                output.value = cesarDecodeText(input, shift);
            }

            function cesarEncodeText(input, shift) {
                let output = '';
                for (let i = 0; i < input.length; i++) {
                    output += cesarEncodeLetter(input[i], shift);
                }
                return output;
            }

            function cesarDecodeText(input, shift) {
                let output = '';
                for (let i = 0; i < input.length; i++) {
                    output += cesarDecodeLetter(input[i], shift);
                }
                return output;
            }

            function cesarEncodeLetter(letter, shift) {
                const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const index = alphabet.indexOf(letter);
                if (index === -1) {
                    return letter;
                }
                return alphabet[(index + shift) % 26];
            }

            function cesarDecodeLetter(letter, shift) {
                const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const index = alphabet.indexOf(letter);
                if (index === -1) {
                    return letter;
                }
                return alphabet[(index - shift + 26) % 26];
            }
