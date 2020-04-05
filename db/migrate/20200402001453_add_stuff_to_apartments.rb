class AddStuffToApartments < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :name, :string
    add_column :apartments, :street2, :string
    add_column :apartments, :state, :string
  end
end
