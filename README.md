# Automation Challenge ⌨️

This challenge was solved using Node.js and Cypress Automation Framework. Here I leave some comments to help you download the automation suite and
run it properly

## Setting up the Automation Suite 🔧

1. Clone the repository

Use the following command to clone the repository:

```
git clone https://github.com/MoisesVivar/Automation_Challenge_MoisesV.git
```

2. Navigate to the repo directory
3. Install all the dependencies using the following command:

```
npm install
```
## Running Scenarios :bicyclist:

As a quick reminder, the scenarios for the challenge are:

1. **Scenario1**  Login with a valid user.
2. **Scenario2**  Login with an invalid user.
3. **Scenario3**  Logout from the home page.
3. **Scenario4**  Sort products by Price (low to high).
5. **Scenario5**  Add multiple items to the shopping cart.
6. **Scenario6**  Add the specific product ‘Sauce Labs Onesie’ to the shopping cart.
7. **Scenario7**  Complete a purchase.

**Running all scenarios**

In order to run all scenarios, use the following command:
```
npx cypress run
```
The default browser used is *Electron 89*, and the suite will run in headless mode by default. 

You can switch between browsers by using the flag `--browser <browser_name>` after the
previous command. 

>Supported browsers: *Firefox 82*, *Edge 92*, *Electron 89* and *Chrome 92*.

You can also switch into a headed mode by using the flag `--headed` after the
previous command. 

>Chrome 92 doesn't support headless mode

**Running a single scenario**

In order to run a single scenario, use the following sintax:

`npm run <Scenario#>`

For example. Use the following command to run the first Scenario:

```
npm run Scenario1
```

You can switch between browsers and change the headed mode by adding the corresponding flags to the scripts on the `package.json` file









