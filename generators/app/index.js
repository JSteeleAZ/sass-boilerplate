'use strict';

const path = require('path');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    this.log('Writing Theme files...');

    this.fs.copy(
      this.templatePath('theme/**'),
      //this.destinationPath('**')
      this.destinationPath('theme/')
    );
  }
};
