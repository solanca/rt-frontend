import React, { useState } from 'react';
import ExchangeAPIView from './ExchangeAPIView';
import ExchangeAPICreate from './ExchangeAPICreate';
import ExchangeAPIEdit from './ExchangeAPIEdit';

function ExchangeAPISettings() {
  const [currentView, setCurrentView] = useState('view'); // Possible values: 'view', 'create', 'edit'
  const [editingAccount, setEditingAccount] = useState(null); // State to hold the editing account

  const handleCreateNew = () => {
    setCurrentView('create');
  };

  const handleEditClick = (account) => {
    setEditingAccount(account); // Set the account to be edited
    setCurrentView('edit');
  };

  const handleSaveCreate = (newData) => {
    // Logic to handle save (create)
    setCurrentView('view');
    // Save the data to your state or backend here
  };

  const handleSaveEdit = (updatedData) => {
    // Logic to handle save (edit)
    setCurrentView('view');
    setEditingAccount(null);
    // Save the updated data to your state or backend here
  };

  const handleCancel = () => {
    // Logic to handle cancel
    setCurrentView('view');
    setEditingAccount(null); // Clear any editing account data
  };

  return (
    <div>
      {currentView === 'view' && <ExchangeAPIView onNavigateToCreate={handleCreateNew} onEditClick={handleEditClick} />}
      {currentView === 'create' && <ExchangeAPICreate onSave={handleSaveCreate} onCancel={handleCancel} />}
      {currentView === 'edit' && <ExchangeAPIEdit onSave={handleSaveEdit} onCancel={handleCancel} account={editingAccount} />}
    </div>
  );
}

export default ExchangeAPISettings;
