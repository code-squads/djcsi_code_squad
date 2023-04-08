import mongoose from "mongoose";

export const OWNER_SCHEMA_ID = "owners"

const ownerSchema = new mongoose.Schema({
  restaurant_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    // unique: true,
  },
  gstin: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  recent_verifications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
    },
  ],
  my_reported: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
    },
  ],
  my_recommended: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
    },
  ],
});

export const Owner = mongoose.model(OWNER_SCHEMA_ID, ownerSchema);