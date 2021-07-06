const petRouter = require("express").Router();
const Pet = require("../models/PetModel");

petRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findOne({ _id: id });
    if (pet) {
      res.status(200).json(pet);
    } else res.status(404).send("pet not found, invalid id");
  } catch (err) {
    next(err);
  }
});

petRouter.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.find({});
    if (pets) res.status(200).json(pets);
  } catch (err) {
    next(err);
  }
});

petRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Pet.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json({ result: result });
    })
    .catch((err) => {
      next(err);
    });
});

petRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const pet = await Pet.findOne({ _id: id });
    const name = req.body.name || pet.name;
    const gender = req.body.gender || pet.gender;
    const neutered = req.body.neutered || pet.neutered;
    const age = req.body.age || pet.age;
    const image = req.body.image || pet.image;
    pet.name = name;
    pet.gender = gender;
    pet.neutered = neutered;
    pet.age = age;
    pet.image = image;
    const response = await Pet.save();
    if (response) {
      res.status(200).json({ response: response });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = petRouter;