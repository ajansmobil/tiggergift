// Firebase CRUD işlemleri

// Veri ekleme - Yeni döküman oluşturur
function dataAddWeb(collection, json) {
    db.collection(collection).doc().set(json);
}

// Veri silme - Belirtilen ID'ye sahip dökümanı siler
function dataDeleteWeb(collection, docId) {
    db.collection(collection).doc(docId).delete();
}

// Veri güncelleme - Belirtilen ID'ye sahip dökümanı günceller
function dataUpdateWeb(collection, docId, json) {
    db.collection(collection).doc(docId).update(json);
}

// Tek döküman getirme - Belirtilen ID'ye sahip dökümanı getirir
function dataGetWeb(collection, docId) {
    return db.collection(collection).doc(docId).get();
}

// Tüm dökümanları listeleme - Koleksiyondaki tüm dökümanları getirir
function dataListWeb(collection) {
    return db.collection(collection).get();
}

// Koşullu sorgulama - Belirli koşullara göre dökümanları getirir
function dataQueryWeb(collection, field, operator, value) {
    return db.collection(collection).where(field, operator, value).get();
}

// Sıralı listeleme - Dökümanları belirtilen alana göre sıralar
function dataOrderWeb(collection, field, direction = 'asc') {
    return db.collection(collection).orderBy(field, direction).get();
}

// Limitli listeleme - Belirtilen sayıda döküman getirir
function dataLimitWeb(collection, limit) {
    return db.collection(collection).limit(limit).get();
}

// Sayfalama - Belirtilen dökümandan sonraki dökümanları getirir
function dataPaginateWeb(collection, lastDoc, limit) {
    return db.collection(collection).startAfter(lastDoc).limit(limit).get();
}

// Gerçek zamanlı dinleme - Koleksiyondaki değişiklikleri dinler
function dataListenWeb(collection, callback) {
    return db.collection(collection).onSnapshot(callback);
}

// Belirli ID ile veri ekleme - Özel ID ile döküman oluşturur
function dataAddWithIdWeb(collection, docId, json) {
    db.collection(collection).doc(docId).set(json);
}

// Veri var mı kontrol etme - Belirtilen ID'ye sahip döküman var mı kontrol eder
function dataExistsWeb(collection, docId) {
    return db
        .collection(collection)
        .doc(docId)
        .get()
        .then((doc) => doc.exists);
}

// Toplu veri ekleme - Birden fazla dökümanı aynı anda ekler
function dataBatchAddWeb(collection, dataArray) {
    const batch = db.batch();
    dataArray.forEach((data) => {
        const docRef = db.collection(collection).doc();
        batch.set(docRef, data);
    });
    return batch.commit();
}

// Toplu veri silme - Birden fazla dökümanı aynı anda siler
function dataBatchDeleteWeb(collection, docIds) {
    const batch = db.batch();
    docIds.forEach((id) => {
        const docRef = db.collection(collection).doc(id);
        batch.delete(docRef);
    });
    return batch.commit();
}
