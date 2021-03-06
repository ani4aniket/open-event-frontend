import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateSettings() {
      this.set('isLoading', true);
      let settings = this.model;
      settings.save()
        .then(() => {
          this.notify.success(this.l10n.t('Settings have been saved successfully.'),
            {
              id: 'setting_payment_save'
            });
        })
        .catch(() => {
          this.notify.error(this.l10n.t('An unexpected error has occurred. Settings not saved.'),
            {
              id: 'setting_payment_error'
            });
        })
        .finally(() => {
          this.set('isLoading', false);
        });
    }
  }
});
