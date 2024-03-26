import { useState, useEffect, ChangeEvent } from 'react';
import { Text, Title, Stack, TextInput } from '@mantine/core';

export default function Teas() {
    const [recipeData, setRecipeData] = useState(null);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const headers = new Headers();
                headers.append('X-Api-Key', process.env.NEXT_PUBLIC_API_KEY || '');
        
                const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
                    headers: headers
                });
        
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
        
                const data = await response.json();
                setRecipeData(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        
        
        fetchRecipes();
    }, [query]);

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <main className={``}>
            <Stack gap="sm">
                <Title order={1} style={{ color: 'taupe', fontWeight: 800 }}>
                    Looking for Tea Recipes?
                </Title>
                <Text color="taupe" size="lg">
                    Enter the tea you want to make and we will provide the recipe!
                </Text>
                <TextInput
                    placeholder="Enter tea name"
                    value={query}
                    onChange={handleQueryChange}
                />
                {recipeData && (
                    <div>
                        <h2>Recipe:</h2>
                        <pre>{JSON.stringify(recipeData, null, 2)}</pre>
                    </div>
                )}
            </Stack>
        </main>
    );
}
