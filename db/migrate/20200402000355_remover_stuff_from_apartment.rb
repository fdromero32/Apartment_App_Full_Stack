class RemoverStuffFromApartment < ActiveRecord::Migration[6.0]
  def change
    remove_column :apartments, :contact_name, :string
    remove_column :apartments, :contact_hours, :text
    remove_column :apartments, :contact_phone, :integer
  end
end
