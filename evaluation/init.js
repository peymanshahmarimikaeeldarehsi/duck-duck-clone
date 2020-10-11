if (window.location.href.indexOf('http') !== -1) {
  window.onload = () => {
    const validateContainer = document.createElement('div');
    validateContainer.style = 'text-align:center;';

    const validateHTML = document.createElement('button');
    validateHTML.innerHTML = 'validate HTML';
    validateHTML.onclick = () => window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateHTML);

    const validateCSS = document.createElement('button');
    validateCSS.innerHTML = 'validate CSS';
    validateCSS.onclick = () => window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateCSS);

    const accessibilityCheckButton = document.createElement('button');
    accessibilityCheckButton.innerHTML = 'accessibility check';
    accessibilityCheckButton.onclick = () => window.open(`https://wave.webaim.org/report#/${encodeURIComponent(window.location.href)}`, '_blank');
    validateContainer.appendChild(accessibilityCheckButton);

    const spellCheckButton = document.createElement('button');
    spellCheckButton.innerHTML = 'spelling check';
    spellCheckButton.onclick = () => window.open(`https://datayze.com/website-spell-checker?domain=${encodeURIComponent(window.location.href)}&parameters=&exclude=&elementtype=limit&elements=&ignored=`, '_blank');
    validateContainer.appendChild(spellCheckButton);

    const developmentStrategyButton = document.createElement('button');
    developmentStrategyButton.innerHTML = 'development strategy';
    const developmentStrategyA = document.createElement('a');
    developmentStrategyA.href = './development-strategy';
    developmentStrategyA.target = '_blank';
    developmentStrategyA.appendChild(developmentStrategyButton);
    validateContainer.appendChild(developmentStrategyA);

    document.body.insertBefore(validateContainer, document.body.firstChild);
  }
}

