export function AllianceTheme () {
    let variables = [
        { name: '--theme-blue', value: '#000054' },
        { name: '--theme-gold', value: 'gold' },
        // Links
        { name: '--theme-link-alt', value: '#77b6c0' },
        // Tables
        { name: '--th-bg', value: 'var(--theme-blue)' },
        { name: '--th-color', value: 'var(--theme-gold)' },
        { name: '--theme-tr-stripe', value: '#010130' },
    ]

    let s = document.documentElement.style;
    variables.forEach(v => {
        s.setProperty(v.name, v.value)
    })
}

export function HordeTheme () {
    let s = document.documentElement.style;

    let variables = [
        { name: '--theme-red', value: '#450000' },
        { name: '--theme-gold', value: 'gold' },
        { name: '--theme-red-2', value: '#470000' },
        // Links
        { name: '--theme-link-alt', value: '#77b6c0' },
        // Tables
        { name: '--th-bg', value: 'var(--theme-red)' },
        { name: '--th-color', value: 'var(--theme-gold)' },
        { name: '--theme-tr-stripe', value: 'var(--theme-red-2)' },
    ]

    variables.forEach(v => {
        s.setProperty(v.name, v.value)
    })
}