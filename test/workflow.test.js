// workflow.test.js
const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

// Construct the path to the YAML file
const yamlFilePath = path.join(__dirname, '..', '.github', 'workflows', 'build.yaml');

// Load the YAML file
const yamlFile = fs.readFileSync(yamlFilePath, 'utf8');

// Parse the YAML content
const workflow = yaml.load(yamlFile);

describe('Workflow', () => {
  test('Name should be "Build backend"', () => {
    expect(workflow.name).toBe('Build backend');
  });

  test('Should have "push" trigger', () => {
    expect(workflow.on.push).toBeDefined();
  });

  test('Should have "pull_request" trigger', () => {
    expect(workflow.on.pull_request).toBeDefined();
  });

  test('Should ignore tags starting with "v"', () => {
    expect(workflow.on.push['tags-ignore']).toContain('v*');
  });

  test('Should trigger on changes to "expense-backend/" directory', () => {
    expect(workflow.on.push.paths).toContain('expense-backend/**');
    expect(workflow.on.pull_request.paths).toContain('expense-backend/**');
  });

  test('Should define environment variables', () => {
    expect(workflow.env).toBeDefined();
    expect(workflow.env.REGISTRY).toBe('ghcr.io');
    expect(workflow.env.IMAGE_NAME).toBe('${{ github.repository }}-backend');
  });

  test('Should define "build" job', () => {
    expect(workflow.jobs.build).toBeDefined();
  });

  test('Should define "docker-builds" job', () => {
    expect(workflow.jobs['docker-builds']).toBeDefined();
  });

  test('Should define steps for "build" job', () => {
    expect(workflow.jobs.build.steps).toBeDefined();
    expect(workflow.jobs.build.steps).toHaveLength(3); // Update with correct number of steps
  });

  test('Should define steps for "docker-builds" job', () => {
    expect(workflow.jobs['docker-builds'].steps).toBeDefined();
    expect(workflow.jobs['docker-builds'].steps).toHaveLength(6); // Update with correct number of steps
    // Add more assertions as needed for individual steps
  });

  // Add more tests as needed
});
