class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.integer :zip_code
      t.string :contact_name
      t.integer :contact_phone
      t.text :contact_hours

      t.timestamps
    end
  end
end
