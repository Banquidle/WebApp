# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

etu = ProSituation.find_or_create_by!(content: "Étudiant")

m = Sex.find_or_create_by!(value: "M")
f = Sex.find_or_create_by!(value: "F")

paris = Location.find_or_create_by!(content: "Paris")

=begin
Person.create(
  quickname: "fillon",
  first_name: FirstName.find_or_create_by!(content: "François"),
  last_name: LastName.find_or_create_by!(content: "Fillon"),
  sex: m,
  pro_situation: etu,
  location: paris
)
=end

Person.create(
  quickname: "norman",
  first_name: FirstName.find_or_create_by!(content: "Test"),
  last_name: LastName.find_or_create_by!(content: "François"),
  sex: m,
  pro_situation: etu,
  location: paris
)
=begin
Person.create(
  quickname: "test",
  first_name: FirstName.find_or_create_by!(content: "François"),
  last_name: LastName.find_or_create_by!(content: "Bayrou"),
  sex: m,
  pro_situation: etu,
  location: paris
)
=end
Person.create(
  quickname: "person2",
  first_name: FirstName.find_or_create_by!(content: "Raph"),
  last_name: LastName.find_or_create_by!(content: "Gen"),
  sex: m,
  pro_situation: etu,
  location: paris
)
