# linear gradient in styled components

    const ThemedBtn = styled('button')(({ theme }) => ({
        backgroundImage: `linear-gradient(60deg, ${theme?.palette.primary.main}, ${theme.palette.primary.dark})`
    }));    