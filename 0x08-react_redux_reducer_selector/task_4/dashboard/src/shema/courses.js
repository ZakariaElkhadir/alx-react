import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

function coursesNormalizer(data) {
    return normalize(data, [course]);
}

export default coursesNormalizer;