<?php
declare(strict_types=1);


class HomeCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->amOnPage('/');
    }

    public function seeContact(\AcceptanceTester $I): void
    {
        $I->see('Sven Kalbhenn');
        $I->see('Fronreute');
    }
}
