<script lang="ts">
	import Section from '../global/Section.svelte';
import SkillCard from './SkillCard.svelte';

    const skills = [
		{ title: 'Spring Framework', src: 'imgs/skills/spring-framework.png' },
		{ title: 'Angular', src: 'imgs/skills/angular.png' },
		{ title: 'PostgreSql', src: 'imgs/skills/postgresql.png' },
		{ title: 'Aws', src: 'imgs/skills/aws.png' }
	];
</script>

<Section title="Competências">
    <div class="grid grid-cols-4 gap-3 m-auto">
        {#each skills as skill, index (index)}
            <SkillCard {skill} />
        {/each}
    </div>
</Section>
