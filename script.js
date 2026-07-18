/* ==========================================================================
   TOP VPN SERVICES 2026 - INTERACTIVE FUNCTIONALITY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initVpnClient();
    renderVpnCards('best'); // Default render tab
    initTabFiltering();
    initSpeedSimulator();
    initMatcherWizard();
    initFaqAccordion();
    initNewsletter();
    initChatbot();
    initMobileNav();
});

/* ==========================================================================
   THEME SWITCHER
   ========================================================================== */
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);

    toggleBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '80px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'var(--bg-secondary)';
                nav.style.padding = '20px';
                nav.style.borderBottom = '1px solid var(--border-color)';
                nav.style.zIndex = '999';
            }
        });
    }
}

/* ==========================================================================
   HERO - VPN CLIENT SIMULATOR
   ========================================================================== */
function initVpnClient() {
    const vpnClient = document.getElementById('vpn-client');
    const circleBtn = document.getElementById('vpn-circle-btn');
    const statusText = circleBtn.querySelector('.status-text');
    const statusInd = document.getElementById('vpn-status-ind');
    const ipVal = document.getElementById('vpn-ip-val');
    const speedVal = document.getElementById('vpn-speed-val');
    const protocolVal = document.getElementById('vpn-protocol-val');
    
    let intervalId = null;
    let isConnected = false;

    circleBtn.addEventListener('click', () => {
        isConnected = !isConnected;
        
        if (isConnected) {
            // Transition to Connecting
            statusText.textContent = 'Connecting...';
            statusInd.className = 'vpn-status-indicator secured';
            statusInd.textContent = 'Securing...';
            circleBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                // Connected State
                vpnClient.classList.add('connected');
                statusText.textContent = 'DISCONNECT';
                statusInd.textContent = 'SECURED';
                ipVal.textContent = '104.244.42.1 (Chicago, US)';
                protocolVal.textContent = 'WireGuard (Secure)';
                circleBtn.style.pointerEvents = 'auto';
                
                // Simulate data flow speed
                intervalId = setInterval(() => {
                    const speed = (Math.random() * (850 - 450) + 450).toFixed(1);
                    speedVal.textContent = `${speed} Mbps`;
                }, 1500);
            }, 1200);

        } else {
            // Disconnect State
            clearInterval(intervalId);
            vpnClient.classList.remove('connected');
            statusText.textContent = 'CONNECT';
            statusInd.className = 'vpn-status-indicator unsecured';
            statusInd.textContent = 'UNSECURED';
            ipVal.textContent = '171.244.10.15 (Hanoi, VN)';
            speedVal.textContent = '0 Mbps';
            protocolVal.textContent = 'None (Danger)';
        }
    });
}

/* ==========================================================================
   VPN PROVIDERS DATA & RENDERER
   ========================================================================== */
const vpnData = [
    {
        id: 'nordvpn',
        name: 'NordVPN',
        logoColor: '#1d4ed8',
        logoLetter: 'N',
        stars: 4.9,
        speed: '98%',
        servers: '6,400+ in 111 Countries',
        unblock: 'Netflix, Prime, BBC, Hulu',
        price: '$3.79',
        period: '/mo (Save 63%)',
        pros: ['Double VPN Encryption', 'Audited Zero-Logs Policy', 'NordLynx Protocol (Fastest)'],
        cons: ['Renewals are slightly higher'],
        categories: ['best', 'fastest', 'streaming'],
        featured: false
    },
    {
        id: 'expressvpn',
        name: 'ExpressVPN',
        logoColor: '#ef4444',
        logoLetter: 'E',
        stars: 4.8,
        speed: '96%',
        servers: '3,000+ in 105 Countries',
        unblock: 'All Streaming Platforms',
        price: '$6.67',
        period: '/mo (Save 49%)',
        pros: ['Lightway Custom Protocol', 'RAM-only TrustServer Technology', 'Outstanding Unblocking Cap'],
        cons: ['Higher price tier'],
        categories: ['best', 'streaming'],
        featured: false
    },
    {
        id: 'surfshark',
        name: 'Surfshark',
        logoColor: '#06b6d4',
        logoLetter: 'S',
        stars: 4.7,
        speed: '95%',
        servers: '3,200+ in 100 Countries',
        unblock: 'Netflix, Disney+, Peacock',
        price: '$2.19',
        period: '/mo (Save 82%)',
        pros: ['Unlimited Device Connections', 'CleanWeb Ad & Malware Blocker', 'Very Budget-Friendly'],
        cons: ['Speed drops slightly on distant servers'],
        categories: ['best', 'budget'],
        featured: true // Highlights as Best Value
    },
    {
        id: 'cyberghost',
        name: 'CyberGhost',
        logoColor: '#f59e0b',
        logoLetter: 'C',
        stars: 4.6,
        speed: '92%',
        servers: '9,500+ in 100 Countries',
        unblock: 'Optimized Streaming Profiles',
        price: '$2.03',
        period: '/mo (Save 83%)',
        pros: ['45-day Money-back Guarantee', 'NoSpy Dedicated Privacy Servers', 'One-click Connection Profiles'],
        cons: ['Desktop client interface can feel heavy'],
        categories: ['budget', 'streaming'],
        featured: false
    },
    {
        id: 'protonvpn',
        name: 'Proton VPN',
        logoColor: '#8b5cf6',
        logoLetter: 'P',
        stars: 4.7,
        speed: '94%',
        servers: '4,400+ in 91 Countries',
        unblock: 'Netflix, Prime, Max, Hulu',
        price: '$4.99',
        period: '/mo (Save 50%)',
        pros: ['Swiss Privacy Laws Protection', '100% Open-source and Audited', 'Secure Core Double Route'],
        cons: ['Free plan limits server locations'],
        categories: ['best', 'fastest'],
        featured: false
    }
];

function renderVpnCards(category) {
    const grid = document.getElementById('vpn-cards-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    // Filter & Sort: display featured one at top for "best" tab, else default order
    const filtered = vpnData.filter(vpn => vpn.categories.includes(category));
    
    // Sort so featured comes first if it's the "best" category
    if (category === 'best') {
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    filtered.forEach((vpn, index) => {
        const card = document.createElement('div');
        card.className = `vpn-row-card ${vpn.featured ? 'highlighted' : ''}`;
        
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            starsHtml += `<svg style="width:14px;height:14px;fill:currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
        }

        const prosHtml = vpn.pros.map(pro => `<span class="pros-item"><svg style="width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> ${pro}</span>`).join('');
        const consHtml = vpn.cons.map(con => `<span class="cons-item"><svg style="width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:3" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg> ${con}</span>`).join('');

        card.innerHTML = `
            <div class="vpn-rank">
                <span class="rank-num">#${index + 1}</span>
            </div>
            <div class="vpn-provider-info">
                <div class="provider-logo-bg" style="background: ${vpn.logoColor}; color: white; font-weight:800; font-size:1.3rem;">
                    ${vpn.logoLetter}
                </div>
                <div>
                    <h3 class="provider-name">${vpn.name}</h3>
                    <div class="star-rating">
                        ${starsHtml}
                        <span>${vpn.stars}</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="vpn-spec-title">Speed Index</div>
                <div class="vpn-spec-val" style="color: var(--accent-cyan)">${vpn.speed}</div>
            </div>
            <div>
                <div class="vpn-spec-title">Servers</div>
                <div class="vpn-spec-val">${vpn.servers}</div>
            </div>
            <div class="vpn-pros-cons">
                <div class="vpn-spec-title">Pros & Cons</div>
                ${prosHtml}
                ${consHtml}
            </div>
            <div class="vpn-pricing">
                <span class="vpn-price">${vpn.price}</span>
                <span class="vpn-period">${vpn.period}</span>
            </div>
            <div class="vpn-action">
                <a href="#newsletter" class="btn ${vpn.featured ? 'btn-primary' : 'btn-secondary'}">Get Deal</a>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function initTabFiltering() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.getAttribute('data-tab');
            renderVpnCards(category);
        });
    });
}

/* ==========================================================================
   INTERACTIVE SPEED & SERVER SIMULATOR
   ========================================================================== */
const serverMetrics = {
    usa: { pingOff: '120ms', pingOn: '28ms', speedOff: 45, speedOn: 92, label: 'Chicago, USA' },
    uk: { pingOff: '160ms', pingOn: '32ms', speedOff: 38, speedOn: 88, label: 'London, UK' },
    japan: { pingOff: '240ms', pingOn: '68ms', speedOff: 28, speedOn: 85, label: 'Tokyo, Japan' },
    australia: { pingOff: '310ms', pingOn: '95ms', speedOff: 22, speedOn: 78, label: 'Sydney, Australia' }
};

function initSpeedSimulator() {
    const serverButtons = document.querySelectorAll('.server-btn');
    const pingOff = document.getElementById('ping-off');
    const pingOn = document.getElementById('ping-on');
    const speedOffVal = document.getElementById('speed-off-val');
    const speedOnVal = document.getElementById('speed-on-val');
    const barOff = document.getElementById('bar-off');
    const barOn = document.getElementById('bar-on');
    const boostPill = document.getElementById('boost-pill');

    serverButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            serverButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const location = btn.getAttribute('data-server');
            const data = serverMetrics[location];

            if (data) {
                // Update metrics with styling animations
                pingOff.textContent = data.pingOff;
                pingOn.textContent = data.pingOn;
                
                speedOffVal.textContent = `${data.speedOff} Mbps`;
                speedOnVal.textContent = `${data.speedOn} Mbps`;

                // Set widths of comparison bars
                barOff.style.width = `${data.speedOff}%`;
                barOn.style.width = `${data.speedOn}%`;

                // Calculate improvement %
                const boost = Math.round(((data.speedOn - data.speedOff) / data.speedOff) * 100);
                boostPill.textContent = `+${boost}% Faster via Tunnel`;
            }
        });
    });
}

/* ==========================================================================
   SMART VPN MATCHER WIZARD
   ========================================================================== */
function initMatcherWizard() {
    const steps = document.querySelectorAll('.wizard-step');
    const pBar = document.getElementById('wizard-progress-bar');
    const prevBtn = document.getElementById('wizard-prev');
    const nextBtn = document.getElementById('wizard-next');
    
    let currentStep = 0;
    const selections = {
        device: '',
        goal: '',
        priority: ''
    };

    // Card selection event listener
    const options = document.querySelectorAll('.option-btn');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const parentStep = opt.closest('.wizard-step');
            const stepType = parentStep.getAttribute('data-step-type');
            
            // Unselect sibling buttons in the current step
            parentStep.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
            opt.classList.add('selected');
            
            selections[stepType] = opt.getAttribute('data-value');
            nextBtn.disabled = false; // Enable navigation once selection is made
        });
    });

    function updateStep() {
        steps.forEach((step, idx) => {
            step.classList.toggle('active', idx === currentStep);
        });

        // Update progress bar
        const progressPercent = ((currentStep + 1) / steps.length) * 100;
        pBar.style.width = `${progressPercent}%`;

        // Update buttons
        prevBtn.style.visibility = currentStep === 0 || currentStep === steps.length - 1 ? 'hidden' : 'visible';
        
        if (currentStep === steps.length - 1) {
            // We are on the results step
            nextBtn.style.display = 'none';
            calculateMatch();
        } else {
            nextBtn.style.display = 'inline-flex';
            nextBtn.textContent = 'Next Step';
            
            // Check if selection is made for the active step to enable/disable button
            const activeStepType = steps[currentStep].getAttribute('data-step-type');
            nextBtn.disabled = !selections[activeStepType];
        }
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStep();
        }
    });

    function calculateMatch() {
        const resultArea = document.getElementById('wizard-result-area');
        let matchedVpn = vpnData[0]; // Default Nord
        let matchPercent = 98;
        let rationale = '';

        const { device, goal, priority } = selections;

        // Custom matching logic
        if (priority === 'budget') {
            matchedVpn = vpnData.find(v => v.id === 'surfshark') || vpnData[2];
            matchPercent = 99;
            rationale = `Since you prioritize budget and are connecting via ${device}, Surfshark is the perfect match. It offers unlimited connections for all your devices at just $2.19/mo.`;
        } else if (goal === 'streaming' && priority === 'performance') {
            matchedVpn = vpnData.find(v => v.id === 'expressvpn') || vpnData[1];
            matchPercent = 97;
            rationale = `For high-performance streaming, ExpressVPN provides dedicated smart DNS routing and blazing speeds via its custom Lightway protocol.`;
        } else {
            // Default NordVPN
            matchedVpn = vpnData.find(v => v.id === 'nordvpn') || vpnData[0];
            matchPercent = 98;
            rationale = `NordVPN excels at security and privacy. Combining double data encryption with audited zero-logs policies makes it the gold standard for your ${goal} needs.`;
        }

        resultArea.innerHTML = `
            <div class="result-vpn-badge">
                <div class="result-vpn-logo" style="background: ${matchedVpn.logoColor}; color: white; font-weight:800; font-size:1.6rem;">
                    ${matchedVpn.logoLetter}
                </div>
                <div class="result-vpn-name">${matchedVpn.name}</div>
                <div class="result-vpn-match">${matchPercent}% Match Score</div>
            </div>
            <p style="color: var(--text-secondary); margin-bottom: var(--space-md); font-size: 0.95rem;">
                ${rationale}
            </p>
            <div style="display:flex; gap: 8px; justify-content: center;">
                <button class="btn btn-secondary" id="btn-restart-wizard">Restart Wizard</button>
                <a href="#newsletter" class="btn btn-primary">Claim Deal (${matchedVpn.price}/mo)</a>
            </div>
        `;

        document.getElementById('btn-restart-wizard').addEventListener('click', () => {
            currentStep = 0;
            selections.device = '';
            selections.goal = '';
            selections.priority = '';
            options.forEach(opt => opt.classList.remove('selected'));
            updateStep();
        });
    }

    // Initialize state
    updateStep();
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentNode;
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // If the clicked item was not active, open it
            if (!isActive) {
                faqItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

/* ==========================================================================
   NEWSLETTER SUBSCRIPTION FORM
   ========================================================================== */
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    const input = document.getElementById('newsletter-email');
    const feedback = document.getElementById('newsletter-feedback');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = input.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            feedback.className = 'newsletter-feedback error';
            feedback.textContent = 'Please enter a valid email address.';
            return;
        }

        // Simulate API request
        feedback.className = 'newsletter-feedback';
        feedback.textContent = 'Submitting...';
        
        setTimeout(() => {
            feedback.className = 'newsletter-feedback success';
            feedback.textContent = 'Thank you! You are now subscribed to VPN deals.';
            input.value = '';
        }, 1000);
    });
}

/* ==========================================================================
   SIMULATED CHATBOT ASSISTANT
   ========================================================================== */
const chatResponses = {
    what_vpn: "A Virtual Private Network (VPN) encrypts your internet connection, hiding your IP address and online actions from internet service providers, hackers, and government tracking.",
    netflix: "Yes, our top recommended VPNs (NordVPN, ExpressVPN, Surfshark) bypass geo-blocks. Surfshark is great for budget, while ExpressVPN offers outstanding speeds for 4K streaming.",
    refund: "All featured VPNs offer a 30-day money-back guarantee. CyberGhost offers a 45-day refund window. Cancellations can be requested via live support.",
    install: "Setup is simple: (1) Buy a plan, (2) Download the VPN app for your device, (3) Sign in and click 'Quick Connect'. It takes under 3 minutes!"
};

const keywordResponses = [
    { keys: ['netflix', 'stream', 'hulu', 'unblock', 'block'], response: "NordVPN, ExpressVPN, and Surfshark are excellent for streaming. ExpressVPN works with almost every global Netflix library." },
    { keys: ['free', 'cost', 'payment', 'trial'], response: "While some free VPNs exist, they often sell your data or limit speeds. High-quality premium plans start at just $2.19/mo with a 30-day money-back guarantee." },
    { keys: ['speed', 'slow', 'gaming', 'ping'], response: "VPNs encrypt data, which can reduce speeds by 5-10%. However, using modern protocols like WireGuard or Lightway prevents noticeable lag." },
    { keys: ['safe', 'security', 'hack', 'privacy'], response: "Yes, look for VPNs with a 'No-Logs Policy' audited by independent third parties like PwC or Deloitte. NordVPN is based in Panama and is extremely secure." }
];

function initChatbot() {
    const bubble = document.getElementById('chat-bubble');
    const window = document.getElementById('chat-window');
    const closeBtn = document.getElementById('chat-close');
    const messageContainer = document.getElementById('chat-messages');
    const suggestButtons = document.querySelectorAll('.chat-suggest-btn');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');

    // Toggle Chat Window
    bubble.addEventListener('click', () => {
        window.classList.toggle('open');
    });

    closeBtn.addEventListener('click', () => {
        window.classList.remove('open');
    });

    // Handle suggestion button clicks
    suggestButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-value');
            const text = btn.textContent;
            
            // Add user message
            appendMessage(text, 'user');
            
            // Add bot typing indicator
            const typingId = showTypingIndicator();
            
            setTimeout(() => {
                removeTypingIndicator(typingId);
                appendMessage(chatResponses[val], 'bot');
            }, 1000);
        });
    });

    // Custom Text Input Submit
    function submitUserQuery() {
        const query = chatInput.value.trim();
        if (!query) return;

        appendMessage(query, 'user');
        chatInput.value = '';

        const typingId = showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator(typingId);
            const lowerQuery = query.toLowerCase();
            let matchResponse = "I'm sorry, I didn't quite catch that. You can ask about Netflix compatibility, pricing, refunds, or general setup instructions.";

            // Keyword match matching
            for (const item of keywordResponses) {
                if (item.keys.some(key => lowerQuery.includes(key))) {
                    matchResponse = item.response;
                    break;
                }
            }

            appendMessage(matchResponse, 'bot');
        }, 1200);
    }

    sendBtn.addEventListener('click', submitUserQuery);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitUserQuery();
    });

    function appendMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `chat-bubble ${sender}`;
        msg.textContent = text;
        messageContainer.appendChild(msg);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        const id = 'typing-' + Date.now();
        indicator.id = id;
        indicator.className = 'chat-bubble bot';
        indicator.innerHTML = `
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        messageContainer.appendChild(indicator);
        messageContainer.scrollTop = messageContainer.scrollHeight;
        return id;
    }

    function removeTypingIndicator(id) {
        const element = document.getElementById(id);
        if (element) element.remove();
    }
}
