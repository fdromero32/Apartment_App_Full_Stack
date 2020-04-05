class AddStuffToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :contact_phone, :integer
    add_column :users, :contact_hours, :text
  end
end
