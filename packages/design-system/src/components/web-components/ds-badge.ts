import register from './register';
import Badge from '../Badge/Badge';

const attributes = ['class-name', 'size', 'variation'];

register(Badge, 'ds-badge', attributes as any);
