// Datos de los eventos
        const eventsData = [
            {
                year: "1945",
                icon: "🕊",
                title: "Fin de la Segunda Guerra Mundial",
                description: "Reunión entre EE. UU., Reino Unido y la URSS para decidir el futuro de Europa tras la derrota de Alemania. La Conferencia de Yalta marcó el inicio de las tensiones entre las potencias aliadas.",
                image: "https://static.nationalgeographicla.com/files/styles/image_3200/public/germany-surrenders-wwii-og_0.jpg?w=1600", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                links: [
                    { text: "📖 Leer más", url: "https://es.wikipedia.org/wiki/Conferencia_de_Yalta" },
                    { text: "🎥 Ver videos", url: "https://www.youtube.com/results?search_query=segunda+guerra+mundial+1945", video: true }
                ]
            },
            {
                year: "1947",
                icon: "⚔",
                title: "Inicio de la Guerra Fría: Doctrina Truman",
                description: "EE. UU. anuncia su política de contención del comunismo; se marcan los bandos capitalista y socialista. La Doctrina Truman estableció el compromiso estadounidense de apoyar a las naciones libres contra el comunismo.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GKtt0J5oJrnZNoVllYyWvu1csCVhYdZq6w&s", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                links: [
                    { text: "📖 Leer más", url: "https://es.wikipedia.org/wiki/Doctrina_Truman" },
                    { text: "🎥 Ver videos", url: "https://www.youtube.com/results?search_query=doctrina+truman+guerra+fria", video: true }
                ]
            },
            {
                year: "1948",
                icon: "💵",
                title: "Plan Marshall",
                description: "Programa estadounidense de ayuda económica para reconstruir Europa y evitar la expansión comunista. Estados Unidos invirtió más de 13 mil millones de dólares en la recuperación europea.",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Marshallplanhilfe.gif", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                links: [
                    { text: "📖 Leer más", url: "https://es.wikipedia.org/wiki/Plan_Marshall" },
                    { text: "🎥 Ver videos", url: "https://www.youtube.com/results?search_query=plan+marshall", video: true }
                ]
            },
            {
                year: "1949",
                icon: "🛡",
                title: "Formación de la OTAN",
                description: "Alianza militar de defensa mutua entre EE. UU., Canadá y varios países europeos occidentales. La Organización del Tratado del Atlántico Norte se convirtió en el principal bloque militar occidental.",
                image: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2022/06/30/62bde7079db13.r_d.380-283-15789.jpeg", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                links: [
                    { text: "📖 Leer más", url: "https://es.wikipedia.org/wiki/Organización_del_Tratado_del_Atlántico_Norte" },
                    { text: "🎥 Ver videos", url: "https://www.youtube.com/results?search_query=creacion+OTAN+1949", video: true }
                ]
            },
            {
                year: "1955",
                icon: "🚩",
                title: "Pacto de Varsovia",
                description: "Respuesta soviética a la OTAN; alianza militar entre la URSS y sus países satélites de Europa del Este. Este pacto consolidó la división de Europa en dos bloques militares opuestos.",
                image: "https://elordenmundial.com/wp-content/uploads/2021/12/pacto-varsovia-union-sovietica.jpg", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                links: [
                    { text: "📖 Leer más", url: "https://es.wikipedia.org/wiki/Pacto_de_Varsovia" },
                    { text: "🎥 Ver videos", url: "https://www.youtube.com/results?search_query=pacto+de+varsovia", video: true }
                ]
            },
            {
                year: "1950-1989",
                icon: "💣",
                title: "Guerras y Conflictos",
                description: "Enfrentamientos indirectos entre EE. UU. y la URSS por el control ideológico global.",
                image: "https://eacnur.org/sites/default/files/styles/hero/public/iStock-686359674.jpg?h=4be270cd&itok=B2242nSK", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                subevents: [
                    { title: "1950-1953: Guerra de Corea", desc: "Corea del Norte (comunista) invade al Sur; intervención de EE. UU. y la ONU." },
                    { title: "1955-1975: Guerra de Vietnam 🌿", desc: "Conflicto entre Vietnam del Norte (apoyado por la URSS) y Vietnam del Sur (apoyado por EE. UU.)." },
                    { title: "1962: Crisis de los Misiles en Cuba ☢", desc: "URSS instala misiles en Cuba apuntando a EE. UU.; el mundo al borde de una guerra nuclear." },
                    { title: "1979-1989: Guerra de Afganistán 🪖", desc: "La URSS invade Afganistán para apoyar un gobierno comunista; EE. UU. respalda a los rebeldes afganos." }
                ],
                links: [
                    { text: "📖 Leer más sobre la Guerra Fría", url: "https://es.wikipedia.org/wiki/Guerra_Fría" }
                ]
            },
            {
                year: "1957-1969",
                icon: "🚀",
                title: "Carrera Espacial",
                description: "Competencia tecnológica y científica entre EE. UU. y la URSS por la supremacía espacial.",
                image: "https://curiosfera-historia.com/wp-content/uploads/historia-de-la-carrera-espacial.jpg", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                subevents: [
                    { title: "1957: Llegada del hombre al espacio 🛰", desc: "URSS lanza el Sputnik y luego envía al primer hombre al espacio: Yuri Gagarin." },
                    { title: "1969: Llegada del hombre a la Luna 🌕", desc: "EE. UU. logra llevar al primer hombre a la Luna con la misión Apolo 11." }
                ],
                links: [
                    { text: "📖 Leer más sobre la Carrera Espacial", url: "https://es.wikipedia.org/wiki/Carrera_espacial" }
                ]
            },
            {
                year: "1989",
                icon: "🧱",
                title: "Caída del Muro de Berlín",
                description: "Símbolo del fin de la división de Europa y debilitamiento del comunismo. El 9 de noviembre de 1989, miles de alemanes cruzaron libremente la frontera por primera vez en décadas.",
                image: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2016%2F11%2F28151616%2FCaida-del-muro-de-Berlin-1920.jpg?auth=f2e5e389de51697df40d8f6b5d082448bed68ac4d95ffa19143bec05e26356f0&smart=true&width=1200&height=675&quality=85", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                links: [
                    { text: "📖 Leer más", url: "https://es.wikipedia.org/wiki/Caída_del_Muro_de_Berlín" },
                    { text: "🎥 Ver videos", url: "https://www.youtube.com/results?search_query=caida+muro+berlin+1989", video: true }
                ]
            },
            {
                year: "1991",
                icon: "🌍",
                title: "Fin de la Guerra Fría: Disolución de la URSS",
                description: "Colapso del bloque socialista y nacimiento de nuevas repúblicas independientes. El 26 de diciembre de 1991, la Unión Soviética dejó de existir oficialmente, marcando el fin definitivo de la Guerra Fría.",
                image: "https://mf.b37mrtl.ru/actualidad/public_images/ff6/ff6e8e6a3415a6450f44febe5258eb81_article.jpg", // INSERTA AQUÍ LA RUTA DE TU IMAGEN
                links: [
                    { text: "📖 Leer más", url: "https://es.wikipedia.org/wiki/Disolución_de_la_Unión_Soviética" },
                    { text: "🎥 Ver videos", url: "https://www.youtube.com/results?search_query=disolucion+union+sovietica+1991", video: true }
                ]
            }
        ];

        // Preguntas del juego
        const questions = [
            {
                question: "¿En qué año comenzó oficialmente la Guerra Fría con la Doctrina Truman?",
                answers: ["1945", "1947", "1950", "1939"],
                correct: 1,
                explanation: "La Guerra Fría comenzó oficialmente en 1947 con la Doctrina Truman, que estableció la política de contención del comunismo."
            },
            {
                question: "¿Qué programa económico ayudó a reconstruir Europa después de la Segunda Guerra Mundial?",
                answers: ["Plan Churchill", "Plan Marshall", "Plan Roosevelt", "Plan Eisenhower"],
                correct: 1,
                explanation: "El Plan Marshall fue el programa estadounidense que invirtió más de 13 mil millones de dólares en la reconstrucción europea."
            },
            {
                question: "¿Qué alianza militar se formó en 1949 como bloque occidental?",
                answers: ["Pacto de Varsovia", "ONU", "OTAN", "Liga de Naciones"],
                correct: 2,
                explanation: "La OTAN (Organización del Tratado del Atlántico Norte) se formó en 1949 como alianza militar occidental."
            },
            {
                question: "¿Cuál fue la respuesta soviética a la creación de la OTAN?",
                answers: ["Pacto de Moscú", "Pacto de Varsovia", "Tratado de Berlín", "Alianza del Este"],
                correct: 1,
                explanation: "El Pacto de Varsovia fue creado en 1955 como respuesta soviética a la OTAN."
            },
            {
                question: "¿En qué año ocurrió la Crisis de los Misiles en Cuba?",
                answers: ["1959", "1960", "1962", "1965"],
                correct: 2,
                explanation: "La Crisis de los Misiles en Cuba ocurrió en 1962 y llevó al mundo al borde de una guerra nuclear."
            },
            {
                question: "¿Qué país lanzó el primer satélite artificial, el Sputnik?",
                answers: ["Estados Unidos", "China", "Unión Soviética", "Francia"],
                correct: 2,
                explanation: "La Unión Soviética lanzó el Sputnik en 1957, marcando el inicio de la carrera espacial."
            },
            {
                question: "¿En qué año llegó el hombre a la Luna?",
                answers: ["1965", "1967", "1969", "1971"],
                correct: 2,
                explanation: "Estados Unidos logró llevar al hombre a la Luna en 1969 con la misión Apolo 11."
            },
            {
                question: "¿Qué guerra duró desde 1955 hasta 1975 entre el Norte comunista y el Sur capitalista?",
                answers: ["Guerra de Corea", "Guerra de Vietnam", "Guerra de Afganistán", "Guerra Civil China"],
                correct: 1,
                explanation: "La Guerra de Vietnam fue un conflicto prolongado entre Vietnam del Norte (comunista) y Vietnam del Sur (capitalista)."
            },
            {
                question: "¿En qué año cayó el Muro de Berlín?",
                answers: ["1987", "1988", "1989", "1990"],
                correct: 2,
                explanation: "El Muro de Berlín cayó el 9 de noviembre de 1989, simbolizando el fin de la división de Europa."
            },
            {
                question: "¿Cuándo se disolvió oficialmente la Unión Soviética?",
                answers: ["1989", "1990", "1991", "1992"],
                correct: 2,
                explanation: "La Unión Soviética se disolvió oficialmente el 26 de diciembre de 1991, marcando el fin de la Guerra Fría."
            }
        ];

        // Variables del juego
        let currentQuestion = 0;
        let score = 0;
        let streak = 0;
        let answered = false;

        // Funciones de navegación
        function showTimeline() {
            document.getElementById('timeline-section').classList.add('active');
            document.getElementById('game-section').classList.remove('active');
            document.getElementById('timeline-btn').classList.add('active');
            document.getElementById('game-btn').classList.remove('active');
        }

        function showGame() {
            document.getElementById('timeline-section').classList.remove('active');
            document.getElementById('game-section').classList.add('active');
            document.getElementById('timeline-btn').classList.remove('active');
            document.getElementById('game-btn').classList.add('active');
        }

        // Funciones del modal
        function openModal(index) {
            const event = eventsData[index];
            const modal = document.getElementById('event-modal');
            
            document.getElementById('modal-icon').textContent = event.icon;
            document.getElementById('modal-year').textContent = event.year;
            document.getElementById('modal-title').textContent = event.title;
            
            // Configurar la imagen si existe
            const modalImage = document.getElementById('modal-image');
            if (event.image) {
                modalImage.src = event.image;
                modalImage.alt = event.title;
            } else {
                modalImage.src = '';
            }
            
            let descHTML = `<p>${event.description}</p>`;
            
            if (event.subevents) {
                descHTML += '<div class="modal-subevents">';
                event.subevents.forEach(sub => {
                    descHTML += `
                        <div class="modal-subevent">
                            <strong>${sub.title}</strong>
                            ${sub.desc}
                        </div>
                    `;
                });
                descHTML += '</div>';
            }
            
            document.getElementById('modal-description').innerHTML = descHTML;
            
            let linksHTML = '';
            event.links.forEach(link => {
                linksHTML += `<a href="${link.url}" target="_blank" class="modal-link ${link.video ? 'video' : ''}">${link.text}</a>`;
            });
            document.getElementById('modal-links').innerHTML = linksHTML;
            
            modal.classList.add('active');
        }

        function closeModal() {
            document.getElementById('event-modal').classList.remove('active');
        }

        // Cerrar modal al hacer clic fuera
        window.onclick = function(event) {
            const modal = document.getElementById('event-modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Funciones del juego
        function loadQuestion() {
            if (currentQuestion >= questions.length) {
                showResults();
                return;
            }

            const q = questions[currentQuestion];
            document.getElementById('current-question').textContent = currentQuestion + 1;
            document.getElementById('total-questions').textContent = questions.length;
            document.getElementById('question-text').textContent = q.question;
            
            const answersGrid = document.getElementById('answers-grid');
            answersGrid.innerHTML = '';
            
            q.answers.forEach((answer, index) => {
                const btn = document.createElement('button');
                btn.className = 'answer-btn';
                btn.textContent = answer;
                btn.onclick = () => checkAnswer(index);
                answersGrid.appendChild(btn);
            });
            
            document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');
            document.getElementById('next-btn').style.display = 'none';
            answered = false;
        }

        function checkAnswer(selected) {
            if (answered) return;
            
            answered = true;
            const q = questions[currentQuestion];
            const buttons = document.querySelectorAll('.answer-btn');
            const feedback = document.getElementById('feedback');
            
            buttons.forEach(btn => btn.disabled = true);
            
            if (selected === q.correct) {
                buttons[selected].classList.add('correct');
                feedback.textContent = '✅ ¡Correcto! ' + q.explanation;
                feedback.classList.add('show', 'correct');
                score += 10;
                streak++;
                
                if (streak >= 3) {
                    score += 5;
                    feedback.textContent += ` 🔥 ¡Racha de ${streak}! +5 puntos bonus`;
                }
            } else {
                buttons[selected].classList.add('incorrect');
                buttons[q.correct].classList.add('correct');
                feedback.textContent = '❌ Incorrecto. ' + q.explanation;
                feedback.classList.add('show', 'incorrect');
                streak = 0;
            }
            
            document.getElementById('score').textContent = score;
            document.getElementById('streak').textContent = streak;
            document.getElementById('next-btn').style.display = 'block';
        }

        function nextQuestion() {
            currentQuestion++;
            loadQuestion();
        }

        function showResults() {
            document.getElementById('question-container').style.display = 'none';
            const resultsDiv = document.getElementById('game-results');
            resultsDiv.style.display = 'block';
            
            const percentage = Math.round((score / (questions.length * 10)) * 100);
            document.getElementById('final-score').textContent = score;
            document.getElementById('final-total').textContent = questions.length * 10;
            document.getElementById('score-percentage').textContent = percentage + '%';
            
            let icon = '🏆';
            let message = '';
            
            if (percentage >= 90) {
                icon = '🏆';
                message = '¡Excelente! Eres un experto en la Guerra Fría.';
            } else if (percentage >= 70) {
                icon = '⭐';
                message = '¡Muy bien! Tienes buenos conocimientos sobre la Guerra Fría.';
            } else if (percentage >= 50) {
                icon = '👍';
                message = '¡Bien hecho! Pero hay espacio para mejorar.';
            } else {
                icon = '📚';
                message = 'Sigue estudiando. Revisa la línea del tiempo para aprender más.';
            }
            
            document.getElementById('results-icon').textContent = icon;
            document.getElementById('results-message').textContent = message;
        }

        function restartGame() {
            currentQuestion = 0;
            score = 0;
            streak = 0;
            answered = false;
            
            document.getElementById('score').textContent = '0';
            document.getElementById('streak').textContent = '0';
            document.getElementById('question-container').style.display = 'block';
            document.getElementById('game-results').style.display = 'none';
            
            loadQuestion();
        }

        // Inicializar el juego al cargar
        window.onload = function() {
            loadQuestion();
        }


