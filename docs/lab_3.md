# Lab 3 - GitHub Actions

- [Configure GitHub Actions](#Configure-GitHub-Actions)
- [Deploy Application to Azure with GitHub Actions](#Deploy-Application-to-Azure-with-GitHub-Actions)
- [Automate Application Re-Deployment of Changes](#Automate-Application-Re-Deployment-of-Changes)
<!-- - [Scale Out Resources](#Scale-Out-Resources)
- [Clean Up Resources](#Clean-Up-Resources) -->

---

## Overview

The third lab will deploy a NodeJS Web App using GitHub Actions.

> Note: Lab 3 uses the same secret `AZURE_CREDENTIALS` as in Lab 1

## Configure GitHub Actions

1. Browse to the `workflows-templates/lab_3_webapps.yaml` file and copy all of the text.

2. Navigate to **Actions** and click **New Workflow**. If prompted to start with a sample workflow click the `Set up a workflow yourself` button in the top right.

3. Replace all of the sample workflow code in the editor by pasting all the code you copied from `workflows-templates/lab_3_webapps.yaml`.

4. Modify the Environment Variables section with the name of the Azure Resource Group to be creates, and the Azure Region to deploy the resources in as in Lab 2. We are also adding the name of our Azure Web App application and the Package Path to the application. Sele

> Note: The Azure Web App application name needs to be globally unique within Azure due to DNS registration. An error will occur if the same Azure Web App name was already used.

```yaml
env:
  RG_NAME: rg-lab-3
  LOCATION: eastus2
  AZURE_WEBAPP_NAME: azure-webapp-unique-name
  AZURE_WEBAPP_PACKAGE_PATH: ./lab_3/app
```

> Note: If changing the `LOCATION variable`, ensure that you use the proper Azure Region name. You can list the available regions for your subscription by running this command `az account list-locations -o table` in Azure Cloud Shell.

5. GitHub Actions files must be saved in a directory in your repo named `.github/workflows/`. The directory structure `.github/workflows/` should already exist in the path, name your workflow file `lab_3_webapps.yaml` and click `Start Commit`.

6. Add a short commit message and click `Commit new file`.

7. We will also need to modify the ARM template for the Azure Web App resource creation to align with the unique name provided in the step 4.

   Navigate to **Code**, open `lab_3/` directory, and open `webapps.deploy.json` file.

   Update the `defaultValue` for the `webAppName` parameter to the unique name.

> ![lab_3_workflow_01](images/lab_3_workflow_01.jpg)

8. Enter a commit message and click `Commit changes`

> ![lab_3_workflow_02](images/lab_3_workflow_02.jpg)

---

## Deploy Application to Azure with GitHub Actions

The workflow we just creted is triggered by changes made to the files in the `lab_3/` directory. Let's trigger the workflow by changing the `readme.txt` file. Navigate to the `lab_3/

## Automate Application Re-Deployment of Changes
