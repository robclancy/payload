import type { DefaultTranslationsObject, Language } from '../types.js'

export const svTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Konto',
    accountOfCurrentUser: 'Konto för nuvarande användare',
    accountVerified: 'Kontot har verifierats framgångsrikt.',
    alreadyActivated: 'Redan aktiverad',
    alreadyLoggedIn: 'Redan inloggad',
    apiKey: 'API-Nyckel',
    authenticated: 'Autentiserad',
    backToLogin: 'Tillbaka till inloggningen',
    beginCreateFirstUser: 'För att börja, skapa din första användare.',
    changePassword: 'Byt lösenord',
    checkYourEmailForPasswordReset:
      'Om e-postadressen är kopplad till ett konto kommer du inom kort att få instruktioner för att återställa ditt lösenord. Vänligen kontrollera din skräppost eller junk mail-mapp om du inte ser e-postmeddelandet i din inkorg.',
    confirmGeneration: 'Bekräfta generering',
    confirmPassword: 'Bekräfta lösenord',
    createFirstUser: 'Skapa första användaren',
    emailNotValid: 'Angiven e-postadress är inte giltig',
    emailOrUsername: 'E-post eller användarnamn',
    emailSent: 'E-posten skickad',
    emailVerified: 'E-post verifierad framgångsrikt.',
    enableAPIKey: 'Aktivera API-nyckel',
    failedToUnlock: 'Det gick inte att låsa upp',
    forceUnlock: 'Tvinga upplåsning',
    forgotPassword: 'Glömt lösenord',
    forgotPasswordEmailInstructions:
      'Vänligen ange din e-postadress nedan. Du kommer att få ett e-postmeddelande med instruktioner om hur du återställer ditt lösenord.',
    forgotPasswordQuestion: 'Glömt lösenordet?',
    forgotPasswordUsernameInstructions:
      'Ange ditt användarnamn nedan. Instruktioner om hur du återställer ditt lösenord kommer att skickas till e-postadressen kopplad till ditt användarnamn.',
    generate: 'Generera',
    generateNewAPIKey: 'Generera ny API-nyckel',
    generatingNewAPIKeyWillInvalidate:
      'Att generera en ny API-nyckel kommer <1>ogiltigförklara</1> föregående nyckel. Är du säker på att du vill fortsätta?',
    lockUntil: 'Lås tills',
    logBackIn: 'Logga in igen',
    loggedIn: 'För att logga in med en annan användare, bör du <0>logga ut</0> först.',
    loggedInChangePassword:
      'För att ändra ditt lösenord, gå till ditt <0>konto</0> och redigera ditt lösenord där.',
    loggedOutInactivity: 'Du har blivit utloggad på grund av inaktivitet.',
    loggedOutSuccessfully: 'Du har loggat ut framgångsrikt.',
    loggingOut: 'Loggar ut...',
    login: 'Logga in',
    loginAttempts: 'Inloggningsförsök',
    loginUser: 'Logga in användare',
    loginWithAnotherUser: 'För att logga in med en annan användare, bör du <0>logga ut</0> först.',
    logOut: 'Logga ut',
    logout: 'Logga ut',
    logoutSuccessful: 'Utloggning framgångsrik.',
    logoutUser: 'Logga ut användare',
    newAccountCreated:
      'Ett nytt konto har precis skapats som du kan komma åt <a href="{{serverURL}}">{{serverURL}}</a> Klicka på följande länk eller klistra in webbadressen nedan i din webbläsare för att verifiera din e-post: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Efter att ha verifierat din e-post kommer du att kunna logga in framgångsrikt.',
    newAPIKeyGenerated: 'Ny API Nyckel Genererad.',
    newPassword: 'Nytt Lösenord',
    passed: 'Autentisering Godkänd',
    passwordResetSuccessfully: 'Lösenordet har återställts framgångsrikt.',
    resetPassword: 'Återställ Lösenord',
    resetPasswordExpiration: 'Återställ Lösenordsutgång',
    resetPasswordToken: 'Återställ Lösenord Token',
    resetYourPassword: 'Återställ Ditt Lösenord',
    stayLoggedIn: 'Stanna inloggad',
    successfullyRegisteredFirstUser: 'Registrerade framgångsrikt den första användaren.',
    successfullyUnlocked: 'Låst upp framgångsrikt',
    tokenRefreshSuccessful: 'Tokenuppdatering lyckades.',
    unableToVerify: 'Det går inte att Verifiera',
    username: 'Användarnamn',
    usernameNotValid: 'Det angivna användarnamnet är inte giltigt',
    verified: 'Verifierad',
    verifiedSuccessfully: 'Framgångsrikt Verifierad',
    verify: 'Verifiera',
    verifyUser: 'Verifiera Användare',
    verifyYourEmail: 'Verifiera din epost',
    youAreInactive:
      'Du har inte varit aktiv på ett tag och kommer inom kort att automatiskt loggas ut för din egen säkerhet. Vill du forsätta att vara inloggad?',
    youAreReceivingResetPassword:
      'Du får detta för att du (eller någon annan) har begärt återställning av lösenordet för ditt konto. Klicka på följande länk eller klistra in den i din webbläsare för att slutföra processen:',
    youDidNotRequestPassword:
      'Om du inte begärde detta, ignorera detta e-postmeddelande och ditt lösenord kommer att förbli oförändrat.',
  },
  error: {
    accountAlreadyActivated: 'Detta konto har redan aktiverats.',
    autosaving: 'Det uppstod ett problem när det här dokumentet skulle sparas automatiskt.',
    correctInvalidFields: 'Vänligen korrigera ogiltiga fält.',
    deletingFile: 'Det gick inte att ta bort filen.',
    deletingTitle:
      'Det uppstod ett fel vid borttagningen av {{title}}. Vänligen kontrollera din anslutning och försök igen.',
    emailOrPasswordIncorrect: 'E-postadressen eller lösenordet som angivits är felaktigt.',
    followingFieldsInvalid_one: 'Följande fält är ogiltigt:',
    followingFieldsInvalid_other: 'Följande fält är ogiltiga:',
    incorrectCollection: 'Felaktig Samling',
    invalidFileType: 'Ogiltig filtyp',
    invalidFileTypeValue: 'Ogiltig filtyp: {{value}}',
    invalidRequestArgs: 'Ogiltiga argument har skickats i begäran: {{args}}',
    loadingDocument: 'Det gick inte att läsa in dokumentet med ID {{id}}.',
    localesNotSaved_one: 'Följande lokal kunde inte sparas:',
    localesNotSaved_other: 'Följande lokaler kunde inte sparas:',
    logoutFailed: 'Utloggning misslyckades.',
    missingEmail: 'E-postadress saknas.',
    missingIDOfDocument: 'Saknar ID för dokumentet som ska uppdateras.',
    missingIDOfVersion: 'ID för versionen saknas.',
    missingRequiredData: 'Obligatorisk data saknas.',
    noFilesUploaded: 'Inga filer laddades upp.',
    noMatchedField: 'Inget matchande fält hittades för "{{label}}"',
    notAllowedToAccessPage: 'Du får inte komma åt den här sidan.',
    notAllowedToPerformAction: 'Du får inte utföra denna åtgärd.',
    notFound: 'Den begärda resursen hittades inte.',
    noUser: 'Ingen Användare',
    previewing: 'Det uppstod ett problem när det här dokumentet skulle förhandsgranskas.',
    problemUploadingFile: 'Det uppstod ett problem när filen laddades upp.',
    tokenInvalidOrExpired: 'Token är antingen ogiltig eller har löpt ut.',
    tokenNotProvided: 'Token inte tillhandahållet.',
    unableToDeleteCount: 'Det gick inte att ta bort {{count}} av {{total}} {{label}}.',
    unableToReindexCollection:
      'Fel vid omindexering av samlingen {{collection}}. Operationen avbröts.',
    unableToUpdateCount: 'Det gick inte att uppdatera {{count}} av {{total}} {{label}}.',
    unauthorized: 'Obehörig, du måste vara inloggad för att göra denna begäran.',
    unauthorizedAdmin: 'Obehörig, denna användare har inte åtkomst till adminpanelen.',
    unknown: 'Ett okänt fel har uppstått.',
    unPublishingDocument: 'Det uppstod ett problem när det här dokumentet skulle avpubliceras.',
    unspecific: 'Ett fel har uppstått.',
    userEmailAlreadyRegistered: 'En användare med den angivna e-postadressen är redan registrerad.',
    userLocked: 'Den här användaren är låst på grund av för många misslyckade inloggningsförsök.',
    usernameAlreadyRegistered: 'En användare med det angivna användarnamnet är redan registrerad.',
    usernameOrPasswordIncorrect: 'Användarnamnet eller lösenordet som angavs är felaktigt.',
    valueMustBeUnique: 'Värdet måste vara unikt',
    verificationTokenInvalid: 'Verifieringstoken är ogiltig.',
  },
  fields: {
    addLabel: 'Lägg till {{label}}',
    addLink: 'Lägg till Länk',
    addNew: 'Lägg till ny',
    addNewLabel: 'Lägg till ny {{label}}',
    addRelationship: 'Lägg till Relation',
    addUpload: 'Lägg till Uppladdning',
    block: 'block',
    blocks: 'block',
    blockType: 'Block Typ',
    chooseBetweenCustomTextOrDocument:
      'Välj mellan att ange en anpassad text-URL eller länka till ett annat dokument.',
    chooseDocumentToLink: 'Välj ett dokument att länka till',
    chooseFromExisting: 'Välj bland befintliga',
    chooseLabel: 'Välj {{label}}',
    collapseAll: 'Fäll ihop alla',
    customURL: 'Anpassad URL',
    editLabelData: 'Redigera {{label}} data',
    editLink: 'Redigera Länk',
    editRelationship: 'Redigera Relation',
    enterURL: 'Ange en URL',
    internalLink: 'Intern länk',
    itemsAndMore: '{{items}} och {{count}} mer',
    labelRelationship: '{{label}} Relation',
    latitude: 'Latitud',
    linkedTo: 'Länkad till <0>{{label}}</0>',
    linkType: 'Länktyp',
    longitude: 'Longitud',
    newLabel: 'Ny {{label}}',
    openInNewTab: 'Öppna i ny flik',
    passwordsDoNotMatch: 'Lösenorden matchar inte.',
    relatedDocument: 'Relaterat Dokument',
    relationTo: 'Relation till',
    removeRelationship: 'Ta Bort Relation',
    removeUpload: 'Ta Bort Uppladdning',
    saveChanges: 'Spara ändringar',
    searchForBlock: 'Sök efter ett block',
    selectExistingLabel: 'Välj befintlig {{label}}',
    selectFieldsToEdit: 'Välj fält att redigera',
    showAll: 'Visa Alla',
    swapRelationship: 'Byt Förhållande',
    swapUpload: 'Byt Uppladdning',
    textToDisplay: 'Text att visa',
    toggleBlock: 'Växla block',
    uploadNewLabel: 'Ladda upp ny {{label}}',
  },
  general: {
    aboutToDelete: 'Du är på väg att ta bort {{label}} <1>{{title}}</1>. Är du säker?',
    aboutToDeleteCount_many: 'Du är på väg att ta bort {{count}} {{label}}',
    aboutToDeleteCount_one: 'Du är på väg att ta bort {{count}} {{label}}',
    aboutToDeleteCount_other: 'Du är på väg att ta bort {{count}} {{label}}',
    addBelow: 'Lägg Till Nedanför',
    addFilter: 'Lägg Till Filter',
    adminTheme: 'Admin Tema',
    all: 'Alla',
    allCollections: 'Alla Samlingar',
    and: 'Och',
    anotherUser: 'En annan användare',
    anotherUserTakenOver: 'En annan användare har tagit över redigeringen av detta dokument.',
    applyChanges: 'Verkställ ändringar',
    ascending: 'Stigande',
    automatic: 'Automatisk',
    backToDashboard: 'Tillbaka till Manöverpanelen',
    cancel: 'Avbryt',
    changesNotSaved:
      'Dina ändringar har inte sparats. Om du lämnar nu kommer du att förlora dina ändringar.',
    clearAll: 'Rensa alla',
    close: 'Stänga',
    collapse: 'Kollapsa',
    collections: 'Samlingar',
    columns: 'Kolumner',
    columnToSort: 'Kolumn att Sortera',
    confirm: 'Bekräfta',
    confirmCopy: 'Bekräfta kopia',
    confirmDeletion: 'Bekräfta radering',
    confirmDuplication: 'Bekräfta dubblering',
    confirmReindex: 'Omindexera alla {{collections}}?',
    confirmReindexAll: 'Omindexera alla samlingar?',
    confirmReindexDescription:
      'Detta kommer att ta bort befintliga index och omindexera dokumenten i {{collections}}-samlingarna.',
    confirmReindexDescriptionAll:
      'Detta kommer att ta bort befintliga index och omindexera dokumenten i alla samlingar.',
    copied: 'Kopierad',
    copy: 'Kopiera',
    copying: 'Kopiering',
    copyWarning:
      'Du håller på att skriva över {{to}} med {{from}} för {{label}} {{title}}. Är du säker?',
    create: 'Skapa',
    created: 'Skapad',
    createdAt: 'Skapad Vid',
    createNew: 'Skapa Ny',
    createNewLabel: 'Skapa ny {{label}}',
    creating: 'Skapar',
    creatingNewLabel: 'Skapar ny {{label}}',
    currentlyEditing:
      'redigerar för närvarande detta dokument. Om du tar över kommer de att blockeras från att fortsätta redigera och kan också förlora osparade ändringar.',
    custom: 'Anpassad',
    dark: 'Mörk',
    dashboard: 'Manöverpanel',
    delete: 'Ta bort',
    deletedCountSuccessfully: 'Raderade {{count}} {{label}} framgångsrikt.',
    deletedSuccessfully: 'Togs bort framgångsrikt.',
    deleting: 'Tar bort...',
    depth: 'Djup',
    descending: 'Fallande',
    deselectAllRows: 'Avmarkera alla rader',
    document: 'Dokument',
    documentLocked: 'Dokument låst',
    documents: 'Dokument',
    duplicate: 'Duplicera',
    duplicateWithoutSaving: 'Duplicera utan att spara ändringar',
    edit: 'Redigera',
    editAll: 'Redigera alla',
    editedSince: 'Redigerad sedan',
    editing: 'Redigerar',
    editingLabel_many: 'Redigerar {{count}} {{label}}',
    editingLabel_one: 'Redigerar {{count}} {{label}}',
    editingLabel_other: 'Redigerar {{count}} {{label}}',
    editingTakenOver: 'Redigering övertagen',
    editLabel: 'Redigera {{label}}',
    email: 'E-post',
    emailAddress: 'E-postadress',
    enterAValue: 'Ange ett värde',
    error: 'Fel',
    errors: 'Fel',
    fallbackToDefaultLocale: 'Återgång till standardlokalspråk',
    false: 'Falskt',
    filter: 'Filter',
    filters: 'Filter',
    filterWhere: 'Filtrera {{label}} där',
    globals: 'Globala',
    goBack: 'Gå tillbaka',
    isEditing: 'redigerar',
    language: 'Språk',
    lastModified: 'Senast Ändrad',
    leaveAnyway: 'Lämna ändå',
    leaveWithoutSaving: 'Lämna utan att spara',
    light: 'Ljus',
    livePreview: 'Förhandsvisa',
    loading: 'Läser in',
    locale: 'Lokal',
    locales: 'Språk',
    menu: 'Meny',
    moveDown: 'Flytta Ner',
    moveUp: 'Flytta Upp',
    newPassword: 'Nytt Lösenord',
    next: 'Nästa',
    noDateSelected: 'Inget datum valt',
    noFiltersSet: 'Inga filter inställda',
    noLabel: '<Ingen {{label}}>',
    none: 'Ingen',
    noOptions: 'Inga alternativ',
    noResults:
      'Inga {{label}} hittades. Antingen finns inga {{label}} ännu eller så matchar inga filtren du har angett ovan.',
    notFound: 'Hittades inte',
    nothingFound: 'Inget hittades',
    noUpcomingEventsScheduled: 'Inga kommande händelser är planerade.',
    noValue: 'Inget värde',
    of: 'av',
    only: 'Endast',
    open: 'Öppna',
    or: 'Eller',
    order: 'Ordning',
    overwriteExistingData: 'Skriv över befintlig fältdatabas',
    pageNotFound: 'Sidan hittas inte',
    password: 'Lösenord',
    payloadSettings: 'Payload Inställningar',
    perPage: 'Per Sida: {{limit}}',
    previous: 'Föregående',
    reindex: 'Omindexera',
    reindexingAll: 'Omindexerar alla {{collections}}.',
    remove: 'Ta bort',
    reset: 'Återställ',
    resetPreferences: 'Återställ preferenser',
    resetPreferencesDescription:
      'Detta kommer att återställa alla dina preferenser till standardinställningarna.',
    resettingPreferences: 'Återställer preferenser.',
    row: 'Rad',
    rows: 'Rader',
    save: 'Spara',
    saving: 'Sparar...',
    schedulePublishFor: 'Schemalägg publicering för {{title}}',
    searchBy: 'Sök efter {{label}}',
    selectAll: 'Välj alla {{count}} {{label}}',
    selectAllRows: 'Välj alla rader',
    selectedCount: '{{count}} {{label}} har valts',
    selectValue: 'Välj ett värde',
    showAllLabel: 'Visa alla {{label}}',
    sorryNotFound: 'Tyvärr–det finns inget som motsvarar din begäran.',
    sort: 'Sortera',
    sortByLabelDirection: 'Sortera efter {{label}} {{direction}}',
    stayOnThisPage: 'Stanna på denna sida',
    submissionSuccessful: 'Inlämningen Lyckades.',
    submit: 'Lämna in',
    submitting: 'Inlämnar...',
    success: 'Framgång',
    successfullyCreated: '{{label}} skapades framgångsrikt.',
    successfullyDuplicated: '{{label}} duplicerades framgångsrikt.',
    successfullyReindexed:
      'Lyckades omindexera {{count}} av {{total}} dokument från {{collections}} samlingar.',
    takeOver: 'Ta över',
    thisLanguage: 'Svenska',
    time: 'Tid',
    titleDeleted: '{{label}} "{{title}}" togs bort framgångsrikt.',
    true: 'Sann',
    unauthorized: 'Obehörig',
    unsavedChanges: 'Du har osparade ändringar. Spara eller kassera innan du fortsätter.',
    unsavedChangesDuplicate: 'Du har osparade ändringar. Vill du fortsätta att duplicera?',
    untitled: 'Namnlös',
    upcomingEvents: 'Kommande händelser',
    updatedAt: 'Uppdaterades Vid',
    updatedCountSuccessfully: 'Uppdaterade {{count}} {{label}} framgångsrikt.',
    updatedSuccessfully: 'Uppdaterades framgångsrikt.',
    updating: 'Uppdatering',
    uploading: 'Uppladdning',
    uploadingBulk: 'Laddar upp {{current}} av {{total}}',
    user: 'Användare',
    username: 'Användarnamn',
    users: 'Användare',
    value: 'Värde',
    viewReadOnly: 'Visa endast läsning',
    welcome: 'Välkommen',
  },
  localization: {
    cannotCopySameLocale: 'Kan inte kopiera till samma plats',
    copyFrom: 'Kopiera från',
    copyFromTo: 'Kopierar från {{from}} till {{to}}',
    copyTo: 'Kopiera till',
    copyToLocale: 'Kopiera till plats',
    localeToPublish: 'Publicera lokalt',
    selectLocaleToCopy: 'Välj plats att kopiera',
  },
  operators: {
    contains: 'innehåller',
    equals: 'likar med',
    exists: 'finns',
    intersects: 'korsar',
    isGreaterThan: 'är större än',
    isGreaterThanOrEqualTo: 'är större än eller lika med',
    isIn: 'är med',
    isLessThan: 'är mindre än',
    isLessThanOrEqualTo: 'är mindre än eller lika med',
    isLike: 'är som',
    isNotEqualTo: 'är inte lika med',
    isNotIn: 'är inte med',
    near: 'nära',
    within: 'inom',
  },
  upload: {
    addFile: 'Lägg till fil',
    addFiles: 'Lägg till filer',
    bulkUpload: 'Massuppladdning',
    crop: 'Skörd',
    cropToolDescription:
      'Dra i hörnen på det valda området, rita ett nytt område eller justera värdena nedan.',
    dragAndDrop: 'Dra och släpp en fil',
    dragAndDropHere: 'eller dra och släpp en fil här',
    editImage: 'Redigera bild',
    fileName: 'Filnamn',
    fileSize: 'Filstorlek',
    filesToUpload: 'Filer att ladda upp',
    fileToUpload: 'Fil att ladda upp',
    focalPoint: 'Fokuspunkt',
    focalPointDescription:
      'Dra fokuspunkten direkt på förhandsgranskningen eller justera värdena nedan.',
    height: 'Höjd',
    lessInfo: 'Mindre info',
    moreInfo: 'Mer info',
    pasteURL: 'Klistra in URL',
    previewSizes: 'Förhandsgranska storlekar',
    selectCollectionToBrowse: 'Välj en Samling att bläddra i',
    selectFile: 'Välj en fil',
    setCropArea: 'Ange beskärning',
    setFocalPoint: 'Ställ in fokuspunkt',
    sizes: 'Storlekar',
    sizesFor: 'Storlekar för {{label}}',
    width: 'Bredd',
  },
  validation: {
    emailAddress: 'Vänligen ange en giltig e-postadress.',
    enterNumber: 'Vänligen skriv in ett giltigt nummer.',
    fieldHasNo: 'Detta fält har ingen {{label}}',
    greaterThanMax: '{{value}} är större än den maximalt tillåtna {{label}} av {{max}}.',
    invalidInput: 'Det här fältet har en ogiltig inmatning.',
    invalidSelection: 'Det här fältet har ett ogiltigt urval.',
    invalidSelections: 'Det här fältet har följande ogiltiga val:',
    lessThanMin: '{{value}} är mindre än den minst tillåtna {{label}} av {{min}}.',
    limitReached: 'Gränsen nådd, endast {{max}} objekt kan läggas till.',
    longerThanMin: 'Detta värde måste vara längre än minimilängden på {{minLength}} tecken.',
    notValidDate: '"{{value}}" är inte ett giltigt datum.',
    required: 'Detta fält är obligatoriskt.',
    requiresAtLeast: 'Detta fält kräver minst {{count}} {{label}}.',
    requiresNoMoreThan: 'Detta fält kräver inte mer än {{count}} {{label}}.',
    requiresTwoNumbers: 'Detta fält kräver två nummer.',
    shorterThanMax: 'Detta värde måste vara kortare än maxlängden på {{maxLength}} tecken.',
    trueOrFalse: 'Detta fält kan bara vara lika med sant eller falskt.',
    username:
      'Var god ange ett giltigt användarnamn. Kan innehålla bokstäver, siffror, bindestreck, punkter och understreck.',
    validUploadID: 'Det här fältet är inte ett giltigt uppladdnings-ID',
  },
  version: {
    type: 'Typ',
    aboutToPublishSelection: 'Du kommer publicera alla {{label}} i urvalet. Är du säker?',
    aboutToRestore:
      'Du kommer återställa detta {{label}} dokumentet till det tillståndet som det var den {{versionDate}}.',
    aboutToRestoreGlobal:
      'Du kommer återställa det globala {{label}} till det tillståndet som det var den {{versionDate}}.',
    aboutToRevertToPublished:
      'Du kommer återställa det här dokumentets ändringar till dess publicerade tillstånd. Är du säker?',
    aboutToUnpublish: 'Du kommer avpublicera detta dokumentet. Är du säker?',
    aboutToUnpublishSelection:
      'Du är på väg att avpublicera alla {{label}} i urvalet. Är du säker?',
    autosave: 'Spara automatiskt',
    autosavedSuccessfully: 'Autosparades framgångsrikt.',
    autosavedVersion: 'Autosparad version',
    changed: 'Ändrad',
    compareVersion: 'Jämför version med:',
    confirmPublish: 'Bekräfta publicering',
    confirmRevertToSaved: 'Bekräfta återgång till sparad',
    confirmUnpublish: 'Bekräfta avpublicering',
    confirmVersionRestoration: 'Bekräfta versionsåterställning',
    currentDocumentStatus: 'Nuvarande {{docStatus}} dokument',
    currentDraft: 'Nuvarande utkast',
    currentPublishedVersion: 'Aktuell publicerad version',
    draft: 'Utkast',
    draftSavedSuccessfully: 'Utkastet sparades framgångsrikt.',
    lastSavedAgo: 'Senast sparad för {{distance}} sedan',
    noFurtherVersionsFound: 'Inga fler versioner hittades',
    noRowsFound: 'Inga {{label}} hittades',
    noRowsSelected: 'Inget {{etikett}} valt',
    preview: 'Förhandsvisa',
    previouslyPublished: 'Tidigare publicerad',
    problemRestoringVersion: 'Det uppstod ett problem när den här versionen skulle återställas',
    publish: 'Publicera',
    publishChanges: 'Publicera ändringar',
    published: 'Publicerad',
    publishIn: 'Publicera i {{locale}}',
    publishing: 'Publicering',
    restoreAsDraft: 'Återställ som utkast',
    restoredSuccessfully: 'Återställd framgångsrikt.',
    restoreThisVersion: 'Återställ den här versionen',
    restoring: 'Återställer...',
    reverting: 'Återgår...',
    revertToPublished: 'Återgå till publicerad',
    saveDraft: 'Spara Utkast',
    scheduledSuccessfully: 'Schemalagd.',
    schedulePublish: 'Schemalägg publicering',
    selectLocales: 'Välj språk att visa',
    selectVersionToCompare: 'Välj en version att jämföra',
    showingVersionsFor: 'Visar versioner för:',
    showLocales: 'Visa språk:',
    status: 'Status',
    unpublish: 'Avpublicera',
    unpublishing: 'Avpublicerar...',
    version: 'Version',
    versionCount_many: '{{count}} versioner hittades',
    versionCount_none: 'Inga versioner hittades',
    versionCount_one: '{{count}} version hittades',
    versionCount_other: '{{count}} versioner hittades',
    versionCreatedOn: '{{version}} skapad den:',
    versionID: 'Versions-ID',
    versions: 'Versioner',
    viewingVersion: 'Visar version för {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Visa version för den globala {{entityLabel}}',
    viewingVersions: 'Visar versioner för {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Visa versioner för den globala {{entityLabel}}',
  },
}

export const sv: Language = {
  dateFNSKey: 'sv',
  translations: svTranslations,
}
