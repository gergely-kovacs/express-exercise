import parse = require('csv-parse');
import fs = require('fs');
import path = require('path');

async function processFile(filePath: string) {
  const records = [];
  const parser = fs
    .createReadStream(path.resolve(filePath))
    .pipe(parse({
      columns: true
    }));
  for await (const record of parser) {
    records.push(record);
  }
  return records;
}

export async function loadPeople() {
  const pathToPeople = 'data/csv/people.csv';
  return await processFile(pathToPeople);
}

export async function loadPerson(id: string) {
  const people = await loadPeople();
  return people.filter(person => person.id === id);
}

export async function loadPlanets() {
  const pathToPlanets = 'data/csv/planets.csv';
  return await processFile(pathToPlanets);
}

export async function loadPlanet(id: string) {
  const planets = await loadPlanets();
  return planets.filter(planet => planet.id === id);
}

export async function loadResidents() {
  const pathToResidents = 'data/csv/residents.csv';
  return await processFile(pathToResidents);
}

export async function loadResidentsByPlanetId(planetId: string) {
  const people = await loadPeople();
  const residents = await loadResidents();
  return people.filter(person =>
    residents.find(resident => resident.resident === person.id && resident.planet === planetId)
  );
}