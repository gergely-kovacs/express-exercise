import express from 'express';
import {loadPeople, loadPerson, loadPlanet, loadPlanets, loadResidentsByPlanetId} from './loaders';

export const router = express.Router();

router.get('/people', async (request, response) => {
  response.json(await loadPeople());
});

router.get('/people/:id', async (request, response) => {
  const personId = request.params.id;
  response.json(await loadPerson(personId));
});

router.get('/people/planet/:planetId', async (request, response) => {
  const planetId = request.params.planetId;
  response.json(await loadResidentsByPlanetId(planetId));
});

router.get('/planets', async (request, response) => {
  response.json(await loadPlanets());
});

router.get('/planets/:id', async (request, response) => {
  const planetId = request.params.id;
  response.json(await loadPlanet(planetId));
});
