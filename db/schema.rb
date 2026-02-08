# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2025_12_19_123512) do
  create_table "first_names", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index [ "content" ], name: "index_first_names_on_content", unique: true
  end

  create_table "last_names", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index [ "content" ], name: "index_last_names_on_content", unique: true
  end

  create_table "locations", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index [ "content" ], name: "index_locations_on_content", unique: true
  end

  create_table "people", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.integer "first_name_id", null: false
    t.integer "last_name_id", null: false
    t.integer "location_id", null: false
    t.integer "pro_situation_id", null: false
    t.string "quickname", null: false
    t.integer "sex_id", null: false
    t.integer "birth_day", null: true
    t.integer "birth_month", null: true
    t.datetime "updated_at", null: false
    t.index [ "first_name_id" ], name: "index_people_on_first_name_id"
    t.index [ "last_name_id" ], name: "index_people_on_last_name_id"
    t.index [ "location_id" ], name: "index_people_on_location_id"
    t.index [ "pro_situation_id" ], name: "index_people_on_pro_situation_id"
    t.index [ "quickname" ], name: "index_people_on_quickname", unique: true
    t.index [ "sex_id" ], name: "index_people_on_sex_id"
  end

  create_table "pro_situation_links", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false

    t.integer "pro_1", null: false
    t.integer "pro_2", null: false
  end

  create_table "pro_situations", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", null: false
    t.string "translation_f"
    t.datetime "updated_at", null: false
    t.index [ "content" ], name: "index_pro_situations_on_content", unique: true
  end

  create_table "sexes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "value"
  end

  add_foreign_key "people", "first_names"
  add_foreign_key "people", "last_names"
  add_foreign_key "people", "locations"
  add_foreign_key "people", "pro_situations"
  add_foreign_key "people", "sexes"
end
