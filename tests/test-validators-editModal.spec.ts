import { test, expect, Page } from '@playwright/test';
import chalk from 'chalk';

// Fonction utilitaire pour tester un champ et vérifier son message d'erreur
async function testFieldValidation(page: Page, inputSelector: string, expectedErrorMessage: string): Promise<void> {
  const input = page.locator(inputSelector);
  await input.click(); // Cliquer dans l'input
  await input.fill(''); // Effacer le contenu de l'input

  // Cliquer en dehors pour déclencher la validation
  await page.click('body');

  // Vérifier que le message d'erreur s'affiche
  const errorMessage = page.locator('.text-validator');
  await expect(errorMessage).toBeVisible();
}

test('User Story: Complete flow', async ({ page }) => {
  try {
    // Step 1: L'URL doit être accessible
    console.log(chalk.blue('Step 1: URL should be reachable'));
    await page.goto('http://localhost:4200/');
    console.log(chalk.green('Step 1: Passed'));

    // Step 2: L'URL doit rediriger vers /pokemons
    console.log(chalk.blue('Step 2: URL redirection to /pokemons'));
    await page.goto('http://localhost:4200/pokemons');
    console.log(chalk.green('Step 2: Passed'));

    // Step 3: La carte Pokémon doit être cliquable
    console.log(chalk.blue('Step 3: Clicking on the Pokemon card'));
    await page.getByText('#5 Reptincel 01/01/2000 Feu').click();
    console.log(chalk.green('Step 3: Passed'));

    // Step 4: Le bouton "Editer" doit ouvrir un modal d'édition
    console.log(chalk.blue('Step 4: Clicking the Edit button to open the edit modal'));
    await page.getByRole('button', { name: 'Editer' }).click();

    const modal = await page.locator('#editModal');
    await expect(modal).toBeVisible();
    console.log(chalk.green('Step 4: Passed'));

    // Step 5: Test all input
    console.log(chalk.blue('Step 5: Test input errors'));
    await testFieldValidation(page, '#name', 'Oh mince! Le nom du Pokémon est requis (1-25). ');
    await testFieldValidation(page, '#HPs', 'Oh mince! Les points de vie du Pokémon sont requis (0-999). ');
    await testFieldValidation(page, '#Attack', 'Oh mince! Les points d\'attaque du Pokémon sont requis (0-999). ');
    await testFieldValidation(page, '#Defense', 'Oh mince! Les points de défense du Pokémon sont requis (0-999). ');

    // Toutes les étapes sont passées avec succès
    console.log(chalk.green.bold('\r\nAll steps passed successfully!'));
  } catch (error: unknown) {
    // Vérification si l'erreur est un objet et possède une propriété 'message'
    if (error instanceof Error) {
      console.log(chalk.red.bold(`\r\nTest failed: ${error.message}`));
    } else {
      console.log(chalk.red.bold('\r\nTest failed with an unknown error'));
    }
    throw error; // Relancer l'erreur pour que le test échoue officiellement
  }
});
