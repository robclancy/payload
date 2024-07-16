import type { DefaultTranslationsObject, Language } from '../types.js'

export const frTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Compte',
    accountOfCurrentUser: 'Compte de l’utilisateur actuel',
    accountVerified: 'Compte vérifié avec succès.',
    alreadyActivated: 'Déjà activé',
    alreadyLoggedIn: 'Déjà connecté',
    apiKey: 'Clé API',
    authenticated: 'Authentifié',
    backToLogin: 'Retour à la connexion',
    beginCreateFirstUser: 'Pour commencer, créez votre premier utilisateur.',
    changePassword: 'Changer le mot de passe',
    checkYourEmailForPasswordReset:
      'Vérifiez votre e-mail, nous vous avons envoyé un lien qui vous permettra de réinitialiser votre mot de passe en toute sécurité.',
    confirmGeneration: 'Confirmer la génération',
    confirmPassword: 'Confirmez le mot de passe',
    createFirstUser: 'Créer le premier utilisateur',
    emailNotValid: 'L’adresse e-mail fournie n’est pas valide',
    emailSent: 'E-mail envoyé',
    emailVerified: 'E-mail vérifié avec succès.',
    enableAPIKey: 'Activer la clé API',
    failedToUnlock: 'Déverrouillage échoué',
    forceUnlock: 'Forcer le déverrouillage',
    forgotPassword: 'Mot de passe oublié',
    forgotPasswordEmailInstructions:
      'Veuillez saisir votre e-mail ci-dessous. Vous recevrez un e-mail avec des instructions concernant comment réinitialiser votre mot de passe.',
    forgotPasswordQuestion: 'Mot de passe oublié ?',
    forgotPasswordUsernameInstructions:
      "Veuillez entrer votre nom d'utilisateur ci-dessous. Les instructions sur comment réinitialiser votre mot de passe seront envoyées à l'adresse e-mail associée à votre nom d'utilisateur.",
    generate: 'Générer',
    generateNewAPIKey: 'Générer une nouvelle clé API',
    generatingNewAPIKeyWillInvalidate:
      'La génération d’une nouvelle clé API <1>invalidera</1> la clé précédente. Êtes-vous sûr de vouloir continuer ?',
    lockUntil: 'Verrouiller jusqu’à',
    logBackIn: 'Se reconnecter',
    logOut: 'Se déconnecter',
    loggedIn:
      'Pour vous connecter en tant qu’un autre utilisateur, vous devez d’abord vous <0>déconnecter</0>.',
    loggedInChangePassword:
      'Pour changer votre mot de passe, rendez-vous sur votre <0>compte</0> puis modifiez-y votre mot de passe.',
    loggedOutInactivity: 'Vous avez été déconnecté pour cause d’inactivité.',
    loggedOutSuccessfully: 'Vous avez été déconnecté avec succès.',
    loggingOut: 'Déconnexion...',
    login: 'Se connecter',
    loginAttempts: 'Tentatives de connexion',
    loginUser: 'Connecter l’utilisateur',
    loginWithAnotherUser:
      'Pour vous connecter en tant qu’un autre utilisateur, vous devez d’abord vous <0>déconnecter</0>.',
    logout: 'Se déconnecter',
    logoutSuccessful: 'Déconnexion réussie.',
    logoutUser: 'Déconnecter l’utilisateur',
    newAPIKeyGenerated: 'Nouvelle clé API générée.',
    newAccountCreated:
      'Un nouveau compte vient d’être créé pour vous permettre d’accéder <a href="{{serverURL}}">{{serverURL}}</a>. Veuillez cliquer sur le lien suivant ou collez l’URL ci-dessous dans votre navigateur pour vérifier votre adresse e-mail: <a href="{{verificationURL}}">{{verificationURL}}</a><br>. Après avoir vérifié votre adresse e-mail, vous pourrez vous connecter avec succès.',
    newPassword: 'Nouveau mot de passe',
    passed: 'Authentification réussie',
    passwordResetSuccessfully: 'Réinitialisation du mot de passe réussie.',
    resetPassword: 'Réinitialiser le mot de passe',
    resetPasswordExpiration: 'Réinitialiser l’expiration du mot de passe',
    resetPasswordToken: 'Réinitialiser le jeton de mot de passe',
    resetYourPassword: 'Réinitialisez votre mot de passe',
    stayLoggedIn: 'Rester connecté',
    successfullyRegisteredFirstUser: 'Premier utilisateur enregistré avec succès.',
    successfullyUnlocked: 'Déverrouillé avec succès',
    tokenRefreshSuccessful: 'Actualisation du jeton réussie.',
    unableToVerify: 'Vérification échouée',
    username: "Nom d'utilisateur",
    usernameNotValid: "Le nom d'utilisateur fourni n'est pas valide",
    verified: 'Vérifié',
    verifiedSuccessfully: 'Vérifié avec succès',
    verify: 'Vérifier',
    verifyUser: 'Vérifier l’utilisateur',
    verifyYourEmail: 'Vérifiez votre e-mail',
    youAreInactive:
      'Vous n’avez pas été actif depuis un moment alors vous serez bientôt automatiquement déconnecté pour votre propre sécurité. Souhaitez-vous rester connecté ?',
    youAreReceivingResetPassword:
      'Vous recevez ceci parce que vous (ou quelqu’un d’autre) avez demandé la réinitialisation du mot de passe de votre compte. Veuillez cliquer sur le lien suivant ou le coller dans votre navigateur pour terminer le processus :',
    youDidNotRequestPassword:
      'Si vous ne l’avez pas demandé, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.',
  },
  error: {
    accountAlreadyActivated: 'Ce compte a déjà été activé.',
    autosaving: 'Un problème est survenu lors de l’enregistrement automatique de ce document.',
    correctInvalidFields: 'Veuillez corriger les champs invalides.',
    deletingFile: 'Une erreur s’est produite lors de la suppression du fichier.',
    deletingTitle:
      'Une erreur s’est produite lors de la suppression de {{title}}. Veuillez vérifier votre connexion puis réessayer.',
    emailOrPasswordIncorrect: 'L’adresse e-mail ou le mot de passe fourni est incorrect.',
    followingFieldsInvalid_one: 'Le champ suivant n’est pas valide :',
    followingFieldsInvalid_other: 'Les champs suivants ne sont pas valides :',
    incorrectCollection: 'Collection incorrecte',
    invalidFileType: 'Type de fichier invalide',
    invalidFileTypeValue: 'Type de fichier invalide : {{value}}',
    loadingDocument:
      'Un problème est survenu lors du chargement du document qui a pour identifiant {{id}}.',
    localesNotSaved_one: 'Le paramètre régional suivant n’a pas pu être enregistré :',
    localesNotSaved_other: 'Les paramètres régionaux suivants n’ont pas pu être enregistrés :',
    logoutFailed: 'La déconnexion a échouée.',
    missingEmail: 'E-mail manquant.',
    missingIDOfDocument: 'Il manque l’identifiant du document à mettre à jour.',
    missingIDOfVersion: 'Il manque l’identifiant de la version.',
    missingRequiredData: 'Données requises manquantes.',
    noFilesUploaded: 'Aucun fichier n’a été téléversé.',
    noMatchedField: 'Aucun champ correspondant n’a été trouvé pour "{{label}}"',
    noUser: 'Aucun utilisateur',
    notAllowedToAccessPage: 'Vous n’êtes pas autorisé à accéder à cette page.',
    notAllowedToPerformAction: 'Vous n’êtes pas autorisé à effectuer cette action.',
    notFound: 'La ressource demandée n’a pas été trouvée.',
    previewing: 'Un problème est survenu lors de l’aperçu de ce document.',
    problemUploadingFile: 'Il y a eu un problème lors du téléversement du fichier.',
    tokenInvalidOrExpired: 'Le jeton n’est soit pas valide ou a expiré.',
    tokenNotProvided: 'Jeton non fourni.',
    unPublishingDocument:
      'Un problème est survenu lors de l’annulation de la publication de ce document.',
    unableToDeleteCount: 'Impossible de supprimer {{count}} sur {{total}} {{label}}.',
    unableToUpdateCount: 'Impossible de mettre à jour {{count}} sur {{total}} {{label}}.',
    unauthorized: 'Non autorisé, vous devez être connecté pour effectuer cette demande.',
    unknown: 'Une erreur inconnue s’est produite.',
    unspecific: 'Une erreur est survenue.',
    userEmailAlreadyRegistered: "Un utilisateur avec l'email donné est déjà enregistré.",
    userLocked:
      'Cet utilisateur est verrouillé en raison d’un trop grand nombre de tentatives de connexion infructueuses.',
    usernameAlreadyRegistered:
      "Un utilisateur avec le nom d'utilisateur donné est déjà enregistré.",
    usernameOrPasswordIncorrect: "Le nom d'utilisateur ou le mot de passe fourni est incorrect.",
    valueMustBeUnique: 'La valeur doit être unique',
    verificationTokenInvalid: 'Le jeton de vérification n’est pas valide.',
  },
  fields: {
    addLabel: 'Ajouter {{label}}',
    addLink: 'Ajouter un Lien',
    addNew: 'Ajouter nouveau ou nouvelle',
    addNewLabel: 'Ajouter nouveau ou nouvelle {{label}}',
    addRelationship: 'Ajouter une relation',
    addUpload: 'Ajouter le téléchargement',
    block: 'bloc',
    blockType: 'Type de bloc',
    blocks: 'blocs',
    chooseBetweenCustomTextOrDocument:
      'Choisissez entre saisir une URL personnalisée ou créer un lien vers un autre document.',
    chooseDocumentToLink: 'Choisissez un document vers lequel établir un lien',
    chooseFromExisting: 'Choisir parmi les existant(e)s',
    chooseLabel: 'Choisir un(e) {{label}}',
    collapseAll: 'Tout réduire',
    customURL: 'URL personnalisée',
    editLabelData: 'Modifier les données de ou du {{label}}',
    editLink: 'Modifier le lien',
    editRelationship: 'Modifier la relation',
    enterURL: 'Entrez une URL',
    internalLink: 'Lien interne',
    itemsAndMore: '{{items}} et {{count}} de plus',
    labelRelationship: 'Relation de ou du {{label}} ',
    latitude: 'Latitude',
    linkType: 'Type de lien',
    linkedTo: 'Lié à <0>{{label}}</0>',
    longitude: 'Longitude',
    newLabel: 'Nouveau ou nouvelle {{label}}',
    openInNewTab: 'Ouvrir dans un nouvel onglet',
    passwordsDoNotMatch: 'Les mots de passe ne correspondent pas.',
    relatedDocument: 'Document connexe',
    relationTo: 'Lié à',
    removeRelationship: 'Supprimer la relation',
    removeUpload: 'Supprimer le téléversement',
    saveChanges: 'Sauvegarder les modifications',
    searchForBlock: 'Rechercher un bloc',
    selectExistingLabel: 'Sélectionnez {{label}} existant',
    selectFieldsToEdit: 'Sélectionnez les champs à modifier',
    showAll: 'Afficher tout',
    swapRelationship: 'Changer de relation',
    swapUpload: 'Changer de Fichier',
    textToDisplay: 'Texte à afficher',
    toggleBlock: 'Bloc bascule',
    uploadNewLabel: 'Téléverser un(e) nouveau ou nouvelle {{label}}',
  },
  general: {
    aboutToDelete:
      'Vous êtes sur le point de supprimer ce ou cette {{label}} <1>{{title}}</1>. Êtes-vous sûr ?',
    aboutToDeleteCount_many: 'Vous êtes sur le point de supprimer {{count}} {{label}}',
    aboutToDeleteCount_one: 'Vous êtes sur le point de supprimer {{count}} {{label}}',
    aboutToDeleteCount_other: 'Vous êtes sur le point de supprimer {{count}} {{label}}',
    addBelow: 'Ajoutez ci-dessous',
    addFilter: 'Ajouter un filtre',
    adminTheme: 'Thème d’administration',
    and: 'Et',
    applyChanges: 'Appliquer les modifications',
    ascending: 'Ascendant',
    automatic: 'Automatique',
    backToDashboard: 'Retour au tableau de bord',
    cancel: 'Annuler',
    changesNotSaved:
      'Vos modifications n’ont pas été enregistrées. Vous perdrez vos modifications si vous quittez maintenant.',
    close: 'Fermer',
    collapse: 'Réduire',
    collections: 'Collections',
    columnToSort: 'Colonne à trier',
    columns: 'Colonnes',
    confirm: 'Confirmer',
    confirmDeletion: 'Confirmer la suppression',
    confirmDuplication: 'Confirmer la duplication',
    copied: 'Copié',
    copy: 'Copie',
    create: 'Créer',
    createNew: 'Créer un(e) nouveau ou nouvelle',
    createNewLabel: 'Créer un(e) nouveau ou nouvelle {{label}}',
    created: 'Créé(e)',
    createdAt: 'Créé(e) à',
    creating: 'création en cours',
    creatingNewLabel: 'Création d’un(e) nouveau ou nouvelle {{label}}',
    custom: 'Personnalisé',
    dark: 'Sombre',
    dashboard: 'Tableau de bord',
    delete: 'Supprimer',
    deletedCountSuccessfully: '{{count}} {{label}} supprimé avec succès.',
    deletedSuccessfully: 'Supprimé(e) avec succès.',
    deleting: 'Suppression en cours...',
    depth: 'Profondeur',
    descending: 'Descendant(e)',
    deselectAllRows: 'Désélectionner toutes les lignes',
    document: 'Document',
    documents: 'Documents',
    duplicate: 'Dupliquer',
    duplicateWithoutSaving: 'Dupliquer sans enregistrer les modifications',
    edit: 'Éditer',
    editLabel: 'Modifier {{label}}',
    editing: 'Modification en cours',
    editingLabel_many: 'Modification des {{count}} {{label}}',
    editingLabel_one: 'Modification de {{count}} {{label}}',
    editingLabel_other: 'Modification des {{count}} {{label}}',
    email: 'E-mail',
    emailAddress: 'Adresse e-mail',
    enterAValue: 'Entrez une valeur',
    error: 'Erreur',
    errors: 'Erreurs',
    fallbackToDefaultLocale: 'Retour à la locale par défaut',
    false: 'Faux',
    filter: 'Filtrer',
    filterWhere: 'Filtrer {{label}} où',
    filters: 'Filtres',
    globals: 'Globals(es)',
    language: 'Langue',
    lastModified: 'Dernière modification',
    leaveAnyway: 'Quitter quand même',
    leaveWithoutSaving: 'Quitter sans sauvegarder',
    light: 'Clair',
    livePreview: 'Aperçu',
    loading: 'Chargement en cours',
    locale: 'Paramètres régionaux',
    locales: 'Paramètres régionaux',
    menu: 'Menu',
    moveDown: 'Déplacer vers le bas',
    moveUp: 'Déplacer vers le haut',
    newPassword: 'Nouveau mot de passe',
    noFiltersSet: 'Aucun filtre défini',
    noLabel: '<Pas de {{label}}>',
    noOptions: 'Aucune option',
    noResults:
      'Aucun(e) {{label}} trouvé(e). Soit aucun(e) {{label}} n’existe encore, soit aucun(e) ne correspond aux filtres que vous avez spécifiés ci-dessus',
    noValue: 'Aucune valeur',
    none: 'Aucun(e)',
    notFound: 'Pas trouvé',
    nothingFound: 'Rien n’a été trouvé',
    of: 'de',
    open: 'Ouvrir',
    or: 'ou',
    order: 'Ordre',
    pageNotFound: 'Page non trouvée',
    password: 'Mot de passe',
    payloadSettings: 'Paramètres de Payload',
    perPage: 'Par Page: {{limit}}',
    remove: 'Retirer',
    reset: 'Réinitialiser',
    row: 'Ligne',
    rows: 'Lignes',
    save: 'Sauvegarder',
    saving: 'Sauvegarde en cours...',
    searchBy: 'Rechercher par {{label}}',
    selectAll: 'Tout sélectionner {{count}} {{label}}',
    selectAllRows: 'Sélectionnez toutes les lignes',
    selectValue: 'Sélectionnez une valeur',
    selectedCount: '{{count}} {{label}} sélectionné',
    showAllLabel: 'Afficher tous les {{label}}',
    sorryNotFound: 'Désolé, rien ne correspond à votre demande.',
    sort: 'Trier',
    sortByLabelDirection: 'Trier par {{label}} {{direction}}',
    stayOnThisPage: 'Rester sur cette page',
    submissionSuccessful: 'Soumission réussie.',
    submit: 'Soumettre',
    submitting: 'Soumission...',
    success: 'Succès',
    successfullyCreated: '{{label}} créé(e) avec succès.',
    successfullyDuplicated: '{{label}} dupliqué(e) avec succès.',
    thisLanguage: 'Français',
    titleDeleted: '{{label}} "{{title}}" supprimé(e) avec succès.',
    true: 'Vrai',
    unauthorized: 'Non autorisé',
    unsavedChangesDuplicate:
      'Vous avez des changements non enregistrés. Souhaitez-vous continuer la duplication ?',
    untitled: 'Sans titre',
    updatedAt: 'Modifié le',
    updatedCountSuccessfully: '{{count}} {{label}} mis à jour avec succès.',
    updatedSuccessfully: 'Mis à jour avec succès.',
    updating: 'Mise à jour',
    uploading: 'Téléchargement',
    user: 'Utilisateur',
    users: 'Utilisateurs',
    value: 'Valeur',
    welcome: 'Bienvenue',
  },
  operators: {
    contains: 'contient',
    equals: 'est égal à',
    exists: 'existe',
    intersects: 'intersecte',
    isGreaterThan: 'est supérieur à',
    isGreaterThanOrEqualTo: 'est supérieur ou égal à',
    isIn: 'est dans',
    isLessThan: 'est inférieur à',
    isLessThanOrEqualTo: 'est inférieur ou égal à',
    isLike: 'est comme',
    isNotEqualTo: 'n’est pas égal à',
    isNotIn: 'n’est pas dans',
    near: 'proche',
    within: 'dans',
  },
  upload: {
    addImage: 'Ajouter une image',
    crop: 'Recadrer',
    cropToolDescription:
      'Faites glisser les coins de la zone sélectionnée, dessinez une nouvelle zone ou ajustez les valeurs ci-dessous.',
    dragAndDrop: 'Glisser-déposer un fichier',
    dragAndDropHere: 'ou glissez-déposez un fichier ici',
    editImage: 'Modifier l’image',
    fileName: 'Nom du fichier',
    fileSize: 'Taille du fichier',
    focalPoint: 'Point focal',
    focalPointDescription:
      'Faites glisser le point focal directement sur l’aperçu ou ajustez les valeurs ci-dessous.',
    height: 'Hauteur',
    lessInfo: 'Moins d’infos',
    moreInfo: 'Plus d’infos',
    pasteURL: `Coller l'URL`,
    previewSizes: 'Tailles d’aperçu',
    selectCollectionToBrowse: 'Sélectionnez une collection à parcourir',
    selectFile: 'Sélectionnez un fichier',
    setCropArea: 'Définir la zone de recadrage',
    setFocalPoint: 'Définir le point focal',
    sizes: 'Tailles',
    sizesFor: 'Tailles pour {{label}}',
    width: 'Largeur',
  },
  validation: {
    emailAddress: 'S’il vous plaît, veuillez entrer une adresse e-mail valide.',
    enterNumber: 'S’il vous plait, veuillez entrer un nombre valide.',
    fieldHasNo: 'Ce champ n’a pas de {{label}}',
    greaterThanMax: '{{value}} est supérieur au max autorisé {{label}} de {{max}}.',
    invalidInput: 'Ce champ a une entrée invalide.',
    invalidSelection: 'Ce champ a une sélection invalide.',
    invalidSelections: 'Ce champ contient les sélections invalides suivantes :',
    lessThanMin: '{{value}} est inférieur au min autorisé {{label}} de {{min}}.',
    limitReached: 'Limite atteinte, seulement {{max}} éléments peuvent être ajoutés.',
    longerThanMin:
      'Cette valeur doit être supérieure à la longueur minimale de {{minLength}} caractères.',
    notValidDate: '"{{value}}" n’est pas une date valide.',
    required: 'Ce champ est requis.',
    requiresAtLeast: 'Ce champ doit avoir au moins {{count}} {{label}}.',
    requiresNoMoreThan: 'Ce champ ne doit pas avoir plus de {{count}} {{label}}.',
    requiresTwoNumbers: 'Ce champ doit avoir deux chiffres.',
    shorterThanMax:
      'Cette valeur doit être inférieure à la longueur maximale de {{maxLength}} caractères.',
    trueOrFalse: 'Ce champ ne peut être égal qu’à vrai ou faux.',
    validUploadID: 'Ce champ n’est pas un valide identifiant de fichier.',
  },
  version: {
    type: 'Type',
    aboutToPublishSelection:
      'Vous êtes sur le point de publier tous les {{label}} de la sélection. Êtes-vous sûr ?',
    aboutToRestore:
      'Vous êtes sur le point de restaurer le document {{label}} à l’état où il se trouvait le {{versionDate}}.',
    aboutToRestoreGlobal:
      'Vous êtes sur le point de restaurer le ou la {{label}} global(e) à l’état où il ou elle se trouvait le {{versionDate}}.',
    aboutToRevertToPublished:
      'Vous êtes sur le point de rétablir les modifications apportées à ce document à la version publiée. Êtes-vous sûr ?',
    aboutToUnpublish:
      'Vous êtes sur le point d’annuler la publication de ce document. Êtes-vous sûr ?',
    aboutToUnpublishSelection:
      'Vous êtes sur le point de dépublier tous les {{label}} de la sélection. Êtes-vous sûr ?',
    autosave: 'Enregistrement automatique',
    autosavedSuccessfully: 'Enregistrement automatique réussi.',
    autosavedVersion: 'Version enregistrée automatiquement',
    changed: 'Modifié',
    compareVersion: 'Comparez cette version à :',
    confirmPublish: 'Confirmer la publication',
    confirmRevertToSaved: 'Confirmer la restauration',
    confirmUnpublish: 'Confirmer l’annulation',
    confirmVersionRestoration: 'Confirmer la restauration de la version',
    currentDocumentStatus: 'Document {{docStatus}} actuel',
    currentDraft: 'Projet actuel',
    currentPublishedVersion: 'Version Publiée Actuelle',
    draft: 'Brouillon',
    draftSavedSuccessfully: 'Brouillon enregistré avec succès.',
    lastSavedAgo: 'Dernière sauvegarde il y a {{distance}}',
    noFurtherVersionsFound: 'Aucune autre version trouvée',
    noRowsFound: 'Aucun(e) {{label}} trouvé(e)',
    preview: 'Aperçu',
    previouslyPublished: 'Précédemment publié',
    problemRestoringVersion: 'Un problème est survenu lors de la restauration de cette version',
    publish: 'Publier',
    publishChanges: 'Publier les modifications',
    published: 'Publié',
    publishing: 'Publication',
    restoreThisVersion: 'Restaurer cette version',
    restoredSuccessfully: 'Restauré(e) avec succès.',
    restoring: 'Restauration en cours...',
    revertToPublished: 'Republier',
    reverting: 'Republication en cours...',
    saveDraft: 'Enregistrer le brouillon',
    selectLocales: 'Sélectionnez les paramètres régionaux à afficher',
    selectVersionToCompare: 'Sélectionnez une version à comparer',
    showLocales: 'Afficher les paramètres régionaux :',
    showingVersionsFor: 'Affichage des versions pour :',
    status: 'Statut',
    unpublish: 'Annuler la publication',
    unpublishing: 'Annulation en cours...',
    version: 'Version',
    versionCount_many: '{{count}} versions trouvées',
    versionCount_none: 'Aucune version trouvée',
    versionCount_one: '{{count}} version trouvée',
    versionCount_other: '{{count}} versions trouvées',
    versionCreatedOn: '{{version}} créé(e) le :',
    versionID: 'Identifiant de la version',
    versions: 'Versions',
    viewingVersion: 'Affichage de la version de ou du {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Affichage de la version globale de ou du {{entityLabel}}',
    viewingVersions: 'Affichage des versions de ou du {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Affichage des versions globales de ou du {{entityLabel}}',
  },
}

export const fr: Language = {
  dateFNSKey: 'fr',
  translations: frTranslations,
}